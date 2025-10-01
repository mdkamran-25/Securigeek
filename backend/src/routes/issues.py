from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session
from typing import List, Optional
from ..database import get_session
from ..models.issue import Issue, IssueCreate, IssueUpdate, IssueResponse, StatusEnum, PriorityEnum
from ..services.issue_service import IssueService

router = APIRouter(prefix="/issues", tags=["issues"])

@router.get("/", response_model=dict)
async def get_issues(
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(10, ge=1, le=100, description="Items per page"),
    search: Optional[str] = Query(None, description="Search in title and description"),
    status: Optional[StatusEnum] = Query(None, description="Filter by status"),
    priority: Optional[PriorityEnum] = Query(None, description="Filter by priority"),
    assignee: Optional[str] = Query(None, description="Filter by assignee"),
    sort_by: str = Query("updated_at", description="Sort field"),
    sort_order: str = Query("desc", description="Sort order (asc/desc)"),
    session: Session = Depends(get_session)
):
    """Get issues with search, filters, sorting, and pagination"""
    issues, total = IssueService.get_issues(
        session=session,
        page=page,
        page_size=page_size,
        search=search,
        status=status,
        priority=priority,
        assignee=assignee,
        sort_by=sort_by,
        sort_order=sort_order
    )
    
    return {
        "issues": issues,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": (total + page_size - 1) // page_size
    }

@router.get("/{issue_id}", response_model=IssueResponse)
async def get_issue(
    issue_id: int,
    session: Session = Depends(get_session)
):
    """Get single issue by ID"""
    issue = IssueService.get_issue(session, issue_id)
    if not issue:
        raise HTTPException(status_code=404, detail="Issue not found")
    return issue

@router.post("/", response_model=IssueResponse)
async def create_issue(
    issue_data: IssueCreate,
    session: Session = Depends(get_session)
):
    """Create new issue - auto-generates id, createdAt, updatedAt"""
    return IssueService.create_issue(session, issue_data)

@router.put("/{issue_id}", response_model=IssueResponse)
async def update_issue(
    issue_id: int,
    issue_data: IssueUpdate,
    session: Session = Depends(get_session)
):
    """Update existing issue - refreshes updatedAt"""
    issue = IssueService.update_issue(session, issue_id, issue_data)
    if not issue:
        raise HTTPException(status_code=404, detail="Issue not found")
    return issue