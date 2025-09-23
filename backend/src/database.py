from sqlmodel import SQLModel, create_engine, Session
from typing import Generator

# Database URL - SQLite file will be created in backend folder
DATABASE_URL = "sqlite:///./issues.db"

# Create engine with echo=True to see SQL queries (helpful for debugging)
engine = create_engine(DATABASE_URL, echo=True)

def create_db_and_tables():
    """Create database and tables"""
    SQLModel.metadata.create_all(engine)

def get_session() -> Generator[Session, None, None]:
    """Get database session dependency for FastAPI"""
    with Session(engine) as session:
        yield session