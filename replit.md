# Mo Maaz Portfolio Application

## Overview

This is a personal portfolio application for Mo Maaz (محمد معاذ), a Data Analyst specializing in mining industry operations. The application showcases professional experience, particularly at Saudi Gold Refinery, and features a modern React-based frontend with a Node.js/Express backend infrastructure.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom theming for mining industry aesthetics
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: Hot reload with Vite integration

### Database Schema
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema Validation**: Zod for runtime type validation
- **Migration**: Drizzle Kit for schema migrations
- **Current Schema**: Basic user authentication system (users table with username/password)

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Career overview and achievements
- **Projects Section**: Featured work including SGR Exploration Dashboard
- **Experience Section**: Professional timeline with detailed accomplishments
- **Contact Section**: Contact form and professional information

### Backend Components
- **Routes**: RESTful API structure (currently minimal setup)
- **Storage**: In-memory storage implementation with interface for database operations
- **Middleware**: Request logging and error handling
- **Vite Integration**: Development server with HMR support

## Data Flow

1. **Frontend Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express routes handle HTTP requests with proper error handling
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL with Drizzle ORM for data persistence

## External Dependencies

### Core Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **UI Library**: Radix UI components for accessibility
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Utilities**: date-fns for date manipulation
- **Animation**: Embla Carousel for interactive components

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Development Tools**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with hot reload
- **Database**: Neon Database with connection pooling
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite build with optimized assets
- **Backend**: esbuild bundle for Node.js deployment
- **Static Assets**: Served from dist/public directory
- **Database**: PostgreSQL with Drizzle migrations

### Build Process
1. Frontend assets compiled with Vite
2. Backend bundled with esbuild
3. Database schema applied with Drizzle migrations
4. Environment-specific configuration applied

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 07, 2025. Initial setup