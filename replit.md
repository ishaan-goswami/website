# Portfolio Application

## Overview

This is a full-stack portfolio application built with React frontend and Express backend. The application showcases personal information, skills, projects, and provides a contact form functionality. It features a modern, responsive design using shadcn/ui components and Tailwind CSS for styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React with TypeScript, using Vite as the build tool and development server. The frontend follows a component-based architecture with clear separation of concerns.

**UI Framework**: Built on shadcn/ui components with Radix UI primitives, providing accessible and customizable UI elements. Uses Tailwind CSS for utility-first styling with a custom design system including CSS variables for theming.

**State Management**: Uses TanStack React Query for server state management and data fetching. Local component state is managed with React hooks.

**Routing**: Implements client-side routing using Wouter, a lightweight routing library. Currently supports home page and 404 not found page.

**Component Structure**: 
- Page components (`/pages`) handle top-level routing
- Feature components organize functionality (hero, navigation, projects, contact, etc.)
- UI components (`/components/ui`) provide reusable design system elements
- Shared data is centralized in `/data/portfolio-data.ts`

### Backend Architecture

**Server Framework**: Express.js with TypeScript providing RESTful API endpoints. Implements middleware for JSON parsing, URL encoding, and request logging.

**API Design**: Simple REST API with endpoints for contact form submissions and message retrieval. Includes proper error handling and validation using Zod schemas.

**Development Setup**: Uses Vite in development mode for hot module replacement and optimized development experience. Production builds are handled separately for client and server.

### Data Storage Solutions

**Database**: Configured to use PostgreSQL with Drizzle ORM for type-safe database operations. Uses Neon Database as the PostgreSQL provider.

**Schema Design**: Defines tables for users and contact messages with proper relationships and constraints. Uses UUID primary keys and timestamps for audit trails.

**Storage Abstraction**: Implements an in-memory storage class for development/testing with the same interface as the database storage, allowing easy switching between storage backends.

### Authentication and Authorization

**Current State**: Basic user schema is defined but authentication is not currently implemented. The infrastructure is in place for future authentication features.

**Planned Features**: User management system with username/password authentication, though not currently active in the application.

### External Service Integrations

**Database Hosting**: Neon Database for PostgreSQL hosting with connection pooling and serverless scaling.

**Development Tools**: 
- Replit-specific plugins for development banner and cartographer
- Runtime error overlay for better debugging experience
- ESBuild for production server bundling

**Styling and Fonts**: Google Fonts integration for typography (Inter, DM Sans, Fira Code, etc.)

**Form Handling**: Contact form with client-side validation and server-side processing, ready for email service integration (commented for future implementation).

The application is designed with scalability in mind, using modern development practices and tools while maintaining simplicity and performance.