from sqlmodel import SQLModel, Field
from datetime import datetime
from typing import Optional
from enum import Enum

class StatusEnum(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in progress"
    CLOSED = "closed"

class PriorityEnum(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

class IssueBase(SQLModel):
    title: str = Field(max_length=200)
    description: Optional[str] = None
    status: StatusEnum = Field(default=StatusEnum.OPEN)
    priority: PriorityEnum = Field(default=PriorityEnum.MEDIUM)
    assignee: Optional[str] = Field(default=None, max_length=100)

class Issue(IssueBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class IssueCreate(IssueBase):
    pass

class IssueUpdate(SQLModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[StatusEnum] = None
    priority: Optional[PriorityEnum] = None
    assignee: Optional[str] = None

class IssueResponse(IssueBase):
    id: int
    created_at: datetime
    updated_at: datetime