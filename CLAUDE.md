# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a full-stack web application for a travel/national parks blog with user authentication. The project uses a monorepo structure with separate front-end and back-end components. The frontend has been migrated from Create React App to Vite for better performance and modern tooling.

### Technology Stack

**Backend (Node.js/Express)**:
- Express.js server with JWT authentication
- PostgreSQL database with Sequelize ORM
- Passport.js for authentication strategies
- CORS enabled for cross-origin requests

**Frontend (React)**:
- Vite build tool with React 18
- Redux Toolkit for state management
- React Router DOM v6 for client-side routing
- CSS modules for styling
- Vitest for testing

### Key Architecture Patterns

**Frontend Structure**:
- `skeleton/` directory contains the main layout components (header, main routing)
- `components/` for reusable UI components
- `redux/` with feature-based slices (user, parks, authentication)
- `styles/` organized by feature/component
- Route-based code splitting with dedicated blog pages

**Backend Structure**:
- Model-View-Controller pattern with Sequelize models
- Route handlers organized by feature (`auth/`, `resources/`)
- JWT token-based authentication
- Database migrations and seeders for schema management

**State Management**:
- Redux store with slices for: user, registrant, parks, isLoggedIn
- Currently some authentication logic is commented out in App.js

## Development Commands

### Backend (from root directory):
```bash
npm run dev              # Start development server with nodemon
npm start               # Start production server
npm run build          # Install frontend deps and build Vite app
```

### Database:
```bash
npm run db:create      # Create database, run migrations and seeders
npm run db:destroy     # Drop database
npm run db:reset       # Reset database (destroy + create)
```

### Frontend (from front-end/ directory):
```bash
npm run dev           # Start Vite development server (port 3000)
npm run start         # Alternative to npm run dev
npm run build         # Build production React app with Vite
npm run preview       # Preview production build locally
npm test              # Run tests with Vitest
```

## Development Workflow

1. Backend runs on the PORT specified in .env file
2. Frontend Vite development server runs on port 3000 (or next available port)
3. Production build serves React app from Express static middleware
4. Authentication uses JWT tokens with Passport strategies
5. Database uses PostgreSQL with development/test/production configurations

## Migration Notes

The project has been migrated from Create React App to Vite:
- Environment variables now use `VITE_` prefix instead of `REACT_APP_`
- Main entry file is now `main.jsx` instead of `index.js`
- HTML template moved to root of front-end directory
- Build output still goes to `build/` directory for Express compatibility
- Testing now uses Vitest instead of Jest

## Important Notes

- The project serves the built React app from the Express server in production
- Client-side routing is handled by React Router with fallback to index.html
- Authentication state is managed through Redux but currently partially disabled
- Blog content is organized with individual blog components (blogA, blogB, blogC)
- Image assets are stored in organized subdirectories under `assets/photos/`
- Environment variables accessed via `import.meta.env.VITE_*` in Vite (not `process.env.REACT_APP_*`)