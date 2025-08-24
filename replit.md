# Open App Services

## Overview

Open App Services is a modern full-stack web application promoting AI automation solutions for sustainable business growth. The platform serves as a marketing and lead generation site for a technology company specializing in process automation, energy optimization, and AI integration services. Built with a React frontend and Express.js backend, the application features a responsive design with contact form functionality for capturing potential client inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and developer experience
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system variables and shadcn/ui components
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **UI Components**: Radix UI primitives wrapped in custom shadcn/ui components
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with proper error handling and logging
- **Validation**: Zod schemas for request/response validation
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot reloading with Vite integration for seamless development experience

### Data Storage Solutions
- **Current Implementation**: In-memory storage using Maps for development and testing
- **Database Ready**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Schema Management**: Centralized schema definitions with automatic TypeScript type generation
- **Migration Support**: Drizzle Kit for database migrations and schema evolution

### Authentication and Authorization
- **Current State**: No authentication implemented (designed for public marketing site)
- **Session Infrastructure**: Express session middleware with PostgreSQL session store configured but not actively used
- **Future Ready**: Infrastructure in place for adding user authentication when needed

### External Dependencies
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Images**: Unsplash for stock photography
- **Icons**: Lucide React for consistent iconography, React Icons for social media icons
- **Development**: Replit-specific plugins for enhanced development experience in Replit environment
- **Email**: No email service currently integrated (contact forms store locally)