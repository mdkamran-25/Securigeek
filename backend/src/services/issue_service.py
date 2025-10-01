from sqlmodel import Session, select, or_, and_, func
from typing import List, Optional
from datetime import datetime
from ..models.issue import Issue, IssueCreate, IssueUpdate, StatusEnum, PriorityEnum

class IssueService:
    
    @staticmethod
    def get_issues(
        session: Session,
        page: int = 1,
        page_size: int = 10,
        search: Optional[str] = None,
        status: Optional[StatusEnum] = None,
        priority: Optional[PriorityEnum] = None,
        assignee: Optional[str] = None,
        sort_by: str = "updated_at",
        sort_order: str = "desc"
    ) -> tuple[List[Issue], int]:
        """Get issues with search, filters, sorting, and pagination"""
        
        # Build base query
        query = select(Issue)
        
        # Apply filters
        filters = []
        
        # Search in title and description
        if search:
            filters.append(
                or_(
                    Issue.title.contains(search),
                    Issue.description.contains(search)
                )
            )
        
        # Filter by status
        if status:
            filters.append(Issue.status == status)
            
        # Filter by priority
        if priority:
            filters.append(Issue.priority == priority)
            
        # Filter by assignee
        if assignee:
            filters.append(Issue.assignee.contains(assignee))
        
        # Apply all filters
        if filters:
            query = query.where(and_(*filters))
        
        # Get total count for pagination
        count_query = select(func.count(Issue.id)).where(and_(*filters)) if filters else select(func.count(Issue.id))
        total = session.exec(count_query).one()
        
        # Apply sorting
        sort_column = getattr(Issue, sort_by, Issue.updated_at)
        if sort_order.lower() == "desc":
            query = query.order_by(sort_column.desc())
        else:
            query = query.order_by(sort_column.asc())
        
        # Apply pagination
        offset = (page - 1) * page_size
        query = query.offset(offset).limit(page_size)
        
        # Execute query
        issues = session.exec(query).all()
        return issues, total
    
    @staticmethod
    def get_issue(session: Session, issue_id: int) -> Optional[Issue]:
        """Get single issue by ID"""
        return session.get(Issue, issue_id)
    
    @staticmethod
    def create_issue(session: Session, issue_data: IssueCreate) -> Issue:
        """Create new issue - auto-generates id, createdAt, updatedAt"""
        issue = Issue(**issue_data.model_dump())
        session.add(issue)
        session.commit()
        session.refresh(issue)
        return issue
    
    @staticmethod
    def update_issue(session: Session, issue_id: int, issue_data: IssueUpdate) -> Optional[Issue]:
        """Update existing issue - refreshes updatedAt"""
        issue = session.get(Issue, issue_id)
        if not issue:
            return None
        
        # Update only provided fields
        update_data = issue_data.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(issue, field, value)
        
        # Refresh updatedAt timestamp
        issue.updated_at = datetime.utcnow()
        
        session.add(issue)
        session.commit()
        session.refresh(issue)
        return issue