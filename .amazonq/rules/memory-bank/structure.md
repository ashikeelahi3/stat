# Project Structure

## Directory Organization

### Root Level Structure
```
stat/
├── app/                    # Next.js App Router directory
├── public/                 # Static assets and resources
├── .amazonq/              # AI assistant configuration
├── .next/                 # Next.js build output (auto-generated)
├── Configuration files    # Build, lint, and type configs
└── Documentation         # Project documentation
```

### Core Application Directory (`/app`)
```
app/
├── favicon.ico           # Application favicon
├── globals.css          # Global styles and Tailwind imports
├── layout.tsx           # Root layout component with theme support
└── page.tsx             # Home page component
```

**Purpose**: Contains the main application code using Next.js App Router architecture. This is where all pages, layouts, and route-specific components are organized.

### Static Assets Directory (`/public`)
```
public/
├── file.svg             # File icon for UI elements
├── globe.svg            # Globe icon for international features
├── next.svg             # Next.js branding
├── vercel.svg           # Vercel deployment branding
└── window.svg           # Window/interface icon
```

**Purpose**: Serves static files directly to the browser. Icons and images are optimized for both light and dark themes.

### Configuration Directory (`/.amazonq`)
```
.amazonq/
└── rules/
    ├── memory-bank/     # AI assistant memory bank
    └── tech.md          # Technology preferences (pnpm usage)
```

**Purpose**: AI assistant configuration and project-specific rules for development workflow.

### Build Output Directory (`/.next`)
```
.next/
└── types/
    ├── cache-life.d.ts  # Cache lifecycle type definitions
    ├── routes.d.ts      # Route type definitions
    └── validator.ts     # Validation utilities
```

**Purpose**: Auto-generated Next.js build artifacts and TypeScript definitions. Not committed to version control.

## Core Components and Relationships

### Application Architecture

#### Layout System
- **Root Layout** (`app/layout.tsx`): Provides global HTML structure, theme provider integration, and font loading
- **Theme Support**: Built-in dark/light mode switching with system preference detection
- **Font Integration**: Geist font family optimization through next/font

#### Page Structure
- **Home Page** (`app/page.tsx`): Main survey interface and navigation
- **Component-based**: Modular React components for survey sections
- **Responsive Design**: Mobile-first approach with Tailwind CSS

#### Styling Architecture
- **Global Styles** (`app/globals.css`): Tailwind CSS imports and custom CSS variables
- **Theme Variables**: CSS custom properties for dark/light mode switching
- **Component Styles**: Utility-first styling with Tailwind classes

### Data Flow Architecture

#### Survey Flow
1. **Randomization Layer**: Assigns participants to experimental conditions
2. **Question Presentation**: Dynamic question ordering based on assignment
3. **Response Collection**: Real-time data capture with validation
4. **Quality Control**: Attention checks and timing validation
5. **Data Export**: Structured output for statistical analysis

#### State Management
- **React State**: Component-level state for form data and UI interactions
- **Theme State**: Global theme preference management
- **Survey Progress**: Step-by-step progress tracking
- **Validation State**: Real-time form validation and error handling

## Architectural Patterns

### Next.js App Router Pattern
- **File-based Routing**: Automatic route generation from file structure
- **Server Components**: Default server-side rendering for performance
- **Client Components**: Interactive elements with "use client" directive
- **Layout Nesting**: Hierarchical layout system for consistent UI

### Component Architecture
- **Composition Pattern**: Reusable components with props-based configuration
- **Container/Presentation**: Separation of logic and presentation concerns
- **Custom Hooks**: Reusable state logic for survey functionality
- **Theme Integration**: Components adapt to light/dark mode automatically

### Styling Strategy
- **Utility-First CSS**: Tailwind CSS for rapid development
- **CSS Variables**: Theme-aware color and spacing systems
- **Responsive Design**: Mobile-first breakpoint system
- **Dark Mode Support**: Automatic theme switching with user preference

### Development Patterns
- **TypeScript-First**: Strict typing for all components and utilities
- **ESLint Integration**: Code quality enforcement with Next.js rules
- **PNPM Workspace**: Efficient package management and dependency resolution
- **Hot Module Replacement**: Instant development feedback

### Build and Deployment
- **Static Generation**: Pre-rendered pages where possible
- **Server-Side Rendering**: Dynamic content for survey interactions
- **Automatic Optimization**: Built-in Next.js performance optimizations
- **Edge Runtime**: Optimized for serverless deployment platforms

### Quality Assurance Architecture
- **Type Safety**: Comprehensive TypeScript coverage
- **Linting Rules**: Automated code quality checks
- **Build Validation**: Compile-time error detection
- **Development Tools**: Integrated debugging and development experience

This architecture supports the complex requirements of academic survey research while maintaining modern web development best practices and optimal user experience across devices and themes.