# CaOPWa Documentation App

## Overview

CaOPWa is a documentation viewer application for a convenience tools app. It serves as a static documentation website with download capabilities, featuring a clean interface built with React and TypeScript. The application displays comprehensive documentation about the CaOPWa convenience tools app, including features, technical specifications, and usage information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast compilation and hot module replacement
- **Wouter** for lightweight client-side routing
- **shadcn/ui** component library built on Radix UI primitives for consistent, accessible UI components
- **Tailwind CSS** for utility-first styling with CSS custom properties for theming
- **TanStack Query** for server state management and caching

### Backend Architecture  
- **Express.js** server with TypeScript for API endpoints
- **In-memory storage** pattern with interface abstraction for potential database migration
- RESTful API design with `/api/documentation` and `/api/download` endpoints
- Middleware for request logging and error handling
- Static file serving for the built React application

### Build and Development
- **ESBuild** for production server bundling with ES modules
- **TypeScript** compilation with strict mode enabled
- Path aliases configured for clean imports (`@/`, `@shared/`)
- Separate development and production workflows

### Data Layer
- **Drizzle ORM** configured for PostgreSQL with schema definitions in shared directory
- Database migrations support through drizzle-kit
- Schema validation using Zod for type-safe data handling
- Connection to Neon Database serverless PostgreSQL

### UI Component System
- Complete shadcn/ui component library implementation
- Radix UI primitives for accessibility compliance
- Consistent design tokens through CSS custom properties
- Dark/light theme support built into the design system
- Responsive design patterns for mobile and desktop

### Documentation Features
- Static content rendering with sections-based organization
- HTML export functionality for offline documentation
- PDF generation through browser print functionality
- Responsive sidebar navigation with smooth scrolling
- Print-optimized styles for documentation export

## External Dependencies

### Core Framework Dependencies
- **React 18** and **React DOM** for UI rendering
- **TypeScript** for static type checking
- **Vite** with React plugin for development and building
- **Express.js** for server-side API

### Database and ORM
- **Drizzle ORM** for database operations and migrations
- **@neondatabase/serverless** for PostgreSQL connection
- **drizzle-zod** for schema validation integration

### UI and Styling
- **Tailwind CSS** with PostCSS and Autoprefixer
- **shadcn/ui** component system
- **Radix UI** component primitives
- **Lucide React** for consistent iconography
- **class-variance-authority** for component variant management

### State Management and Data Fetching
- **TanStack React Query** for server state and caching
- **React Hook Form** with Hookform Resolvers for form management
- **Zod** for runtime type validation

### Development and Build Tools
- **tsx** for TypeScript execution in development
- **ESBuild** for production bundling
- **Replit-specific** plugins for development environment integration

### Utility Libraries
- **clsx** and **tailwind-merge** for conditional class management
- **date-fns** for date manipulation
- **nanoid** for unique ID generation
- **wouter** for lightweight routing