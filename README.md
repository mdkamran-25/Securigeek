# AIHubX - AI Discovery & Learning Platform

A comprehensive AI discovery, learning, and hiring platform built with FastAPI backend and Next.js frontend.

## Features

### Backend (Issue Tracker API)
- View, search, filter, and sort issues
- Create and update issues
- Pagination support
- REST API with FastAPI

### Frontend (AIHubX Platform)
- **Landing Page**: Hero section, trending AI tools, search functionality, stats
- **AI Listings**: Browse and filter 10+ AI tools with detailed cards
- **AI Tool Details**: Interactive tool pages with performance metrics, reviews, and alternatives
- **Testing Environment**: Code editor and chat interface for testing AI tools
- **Learn Section**: Structured courses with progress tracking and quizzes
- **Leaderboard**: Global rankings with badges and achievements
- **Hire Platform**: Job board for AI talent recruitment

## Tech Stack

- **Backend**: FastAPI, SQLModel, SQLite, Uvicorn
- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS v4
- **UI Components**: ShadCN UI, Lucide Icons, Recharts, Framer Motion
- **Design**: Glassmorphism with Almond (#EFDECD) and Burgundy (#800020) theme

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
└── frontend/         # Next.js frontend
    ├── app/          # App router pages
    ├── components/   # Reusable components
    │   ├── ui/       # UI components
    │   └── layout/   # Layout components
    └── lib/          # Utilities and data
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
npm run dev
```

The frontend will be available at http://localhost:3000

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

## Frontend Pages

- `/` - Landing page with hero, trending AI tools, and features
- `/ai-listings` - Browse all AI tools with filters
- `/ai-tool/[id]` - Detailed tool page with tabs (Overview, Live Test, Reviews, Alternatives)
- `/test-environment` - Interactive testing environment with code editor and chat
- `/learn` - Learning section with courses and quizzes
- `/leaderboard` - Global rankings and achievements
- `/hire` - Job board for hiring AI talent

## Development

### URLs

- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs
- Frontend: http://localhost:3000

### Database

- SQLite database file: `backend/issues.db`
- Auto-created on first run

### Testing API

Use the interactive docs at http://localhost:8000/docs to test all endpoints.

## Building for Production

### Backend
```bash
cd backend
uvicorn src.app:app --host 0.0.0.0 --port 8000
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

