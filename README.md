# Issue Tracker

A simple Issue Tracker with Python FastAPI backend and Angular frontend.

## Features

- View, search, filter, and sort issues
- Create and update issues
- Pagination support
- REST API with Angular Material UI

## Tech Stack

- **Backend**: FastAPI, SQLModel, SQLite, Uvicorn
- **Frontend**: Angular, Angular Material, TypeScript

## Project Structure

```
├── backend/          # FastAPI backend
│   ├── src/
│   │   ├── models/   # SQLModel data models
│   │   ├── routes/   # API endpoints
│   │   ├── services/ # Business logic
│   │   ├── app.py    # Main FastAPI app
│   │   └── database.py # Database configuration
│   └── requirements.txt
└── frontend/         # Angular frontend
    └── src/
```

## Quick Start

### Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn src.app:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
ng serve
```

## API Endpoints

### Core Endpoints

- `GET /health` - Health check
- `GET /issues` - List issues (with search, filters, pagination)
- `GET /issues/{id}` - Get single issue
- `POST /issues` - Create issue
- `PUT /issues/{id}` - Update issue

### Query Parameters for GET /issues

- `page` - Page number (default: 1)
- `page_size` - Items per page (default: 10, max: 100)
- `search` - Search in title and description
- `status` - Filter by status: open, in progress, closed
- `priority` - Filter by priority: low, medium, high
- `assignee` - Filter by assignee name
- `sort_by` - Sort field (default: updated_at)
- `sort_order` - Sort order: asc, desc (default: desc)

## Issue Data Model

```json
{
  "id": "integer (auto-generated)",
  "title": "string",
  "description": "string (optional)",
  "status": "enum: ['open','in progress','closed']",
  "priority": "enum: ['low','medium','high']",
  "assignee": "string (optional)",
  "created_at": "ISO8601 timestamp",
  "updated_at": "ISO8601 timestamp"
}
```

## Development

### URLs

- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs
- Frontend: http://localhost:4200

### Database

- SQLite database file: `backend/issues.db`
- Auto-created on first run

### Testing API

Use the interactive docs at http://localhost:8000/docs to test all endpoints.

## Assignment Requirements ✅

- [x] FastAPI backend with REST APIs
- [x] SQLite database with SQLModel ORM
- [x] Health endpoint
- [x] CRUD operations for issues
- [x] Search, filter, sort, pagination
- [x] Auto-generated timestamps
- [ ] Angular frontend (Phase 2)
- [ ] Unit tests

## Current Status

### ✅ Phase 0 & 1 Complete
- ✅ Project setup with proper Git structure
- ✅ Backend API fully functional
- ✅ Database models and migrations
- ✅ All required endpoints implemented
- ✅ CORS configured for frontend
- ✅ API documentation available

### 🚧 Phase 2 (Next)
- Angular frontend setup
- Material UI components
- Issue list table with filtering
- Issue creation/edit forms
- Issue detail view

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
