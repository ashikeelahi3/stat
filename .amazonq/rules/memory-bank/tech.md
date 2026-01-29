# Technology Stack

## Programming Languages and Versions

### Core Languages
- **TypeScript**: ^5 (primary development language with strict mode)
- **JavaScript**: ES2017+ (compilation target)
- **CSS**: Modern CSS with PostCSS processing and CSS variables
- **HTML**: JSX/TSX templates with semantic markup

### Runtime Environment
- **Node.js**: ^20 (development and build environment)
- **React**: 19.2.3 (UI framework with latest features)
- **Next.js**: 16.1.6 (full-stack framework with App Router)

## Framework and Libraries

### Frontend Framework
- **Next.js 16.1.6**: App Router architecture with server components
- **React 19.2.3**: Component-based UI with hooks and context
- **React DOM 19.2.3**: DOM rendering and hydration

### UI and Styling
- **Tailwind CSS**: ^4 (utility-first CSS framework)
- **shadcn/ui**: Component library integration (planned)
- **PostCSS**: CSS processing and optimization
- **@tailwindcss/postcss**: ^4 (Tailwind PostCSS integration)
- **CSS Variables**: Theme-aware design system
- **Dark/Light Mode**: Built-in theme switching support

### Development Tools
- **TypeScript**: ^5 (type checking and compilation)
- **ESLint**: ^9 (code linting and quality)
- **eslint-config-next**: 16.1.6 (Next.js specific linting rules)

## Build System and Dependencies

### Package Management
- **PNPM**: Primary package manager (enforced by project rules)
- **pnpm-workspace.yaml**: Workspace configuration
- **pnpm-lock.yaml**: Dependency lock file for reproducible builds

### Build Configuration
- **next.config.ts**: Next.js build configuration with TypeScript
- **tsconfig.json**: TypeScript compiler configuration
- **postcss.config.mjs**: PostCSS processing configuration
- **eslint.config.mjs**: ESLint rules and settings

### TypeScript Configuration
```json
{
  "target": "ES2017",
  "lib": ["dom", "dom.iterable", "esnext"],
  "strict": true,
  "jsx": "react-jsx",
  "moduleResolution": "bundler",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## Development Commands

### Core Scripts
```bash
# Development server with hot reload
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Code linting and formatting
pnpm lint
```

### Development Workflow
- **Hot Module Replacement**: Instant updates during development
- **TypeScript Checking**: Real-time type validation
- **ESLint Integration**: Code quality enforcement
- **Automatic Optimization**: Built-in Next.js optimizations

## UI Component System

### shadcn/ui Integration (Planned)
- **Component Library**: Pre-built, accessible components
- **Theme Integration**: Seamless dark/light mode support
- **Customization**: Tailwind CSS-based styling system
- **Accessibility**: WCAG compliant components

### Theme System
- **CSS Variables**: Dynamic theme switching
- **System Preference**: Automatic theme detection
- **Manual Toggle**: User-controlled theme switching
- **Persistent Storage**: Theme preference persistence

### Responsive Design
- **Mobile-First**: Tailwind's responsive breakpoint system
- **Flexible Layouts**: CSS Grid and Flexbox utilities
- **Touch-Friendly**: Optimized for mobile interactions
- **Cross-Browser**: Consistent experience across browsers

## Deployment and Production

### Build Output
- **Static Generation**: Pre-rendered pages where possible
- **Server-Side Rendering**: Dynamic content rendering
- **Automatic Code Splitting**: Optimized bundle sizes
- **Image Optimization**: Built-in Next.js image processing

### Production Optimizations
- **Tree Shaking**: Unused code elimination
- **Minification**: JavaScript and CSS compression
- **Bundle Analysis**: Performance monitoring capabilities
- **Edge Runtime**: Optimized for serverless deployment

### Performance Features
- **Automatic Font Optimization**: next/font integration
- **Image Optimization**: next/image with lazy loading
- **Route Prefetching**: Intelligent link prefetching
- **Bundle Splitting**: Optimal code distribution

## Type System

### TypeScript Integration
- **Strict Mode**: Enabled for maximum type safety
- **Path Mapping**: `@/*` aliases for clean imports
- **Next.js Types**: Built-in framework type definitions
- **React Types**: @types/react and @types/react-dom

### Development Experience
- **IntelliSense**: Full IDE support with type hints
- **Error Detection**: Compile-time error catching
- **Refactoring Support**: Safe code transformations
- **Auto-completion**: Enhanced developer productivity

## Quality Assurance

### Code Quality Tools
- **ESLint**: Comprehensive linting with Next.js rules
- **TypeScript**: Static type checking
- **Prettier**: Code formatting (configurable)
- **Husky**: Git hooks for quality gates (optional)

### Testing Strategy (Planned)
- **Jest**: Unit testing framework
- **React Testing Library**: Component testing
- **Playwright**: End-to-end testing
- **MSW**: API mocking for tests

## Development Environment

### IDE Support
- **VS Code**: Recommended with extensions
- **TypeScript Language Server**: Enhanced IntelliSense
- **ESLint Extension**: Real-time linting
- **Tailwind CSS IntelliSense**: Class name completion

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation
- **Accessibility**: Screen reader compatibility

This technology stack provides a modern, scalable foundation for building sophisticated survey research applications with excellent developer experience and user interface quality.

## Documentation Standards

### Markdown Files
- **Always use track**: All markdown files must include tracking for changes and updates