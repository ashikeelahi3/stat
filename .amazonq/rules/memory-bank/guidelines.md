# Development Guidelines

## Code Quality Standards

### TypeScript Usage Patterns
- **Strict Type Definitions**: All components use explicit TypeScript types
- **Import Type Syntax**: Use `import type` for type-only imports (e.g., `import type { Metadata } from "next"`)
- **Interface Definitions**: Prefer interfaces for component props and complex objects
- **Generic Constraints**: Use `Readonly<>` wrapper for immutable props
- **Type Exports**: Export types alongside components when needed

### Component Architecture Standards
- **Default Export Pattern**: All page and layout components use default exports
- **Functional Components**: Exclusively use function components with hooks
- **Props Destructuring**: Destructure props in function parameters for clarity
- **Component Naming**: Use PascalCase for component names matching file names

### File Organization Conventions
- **File Extensions**: Use `.tsx` for React components, `.ts` for utilities
- **Naming Convention**: Use lowercase with hyphens for directories, PascalCase for components
- **Import Ordering**: Next.js imports first, then third-party, then local imports
- **Export Placement**: Place default exports at the bottom of files

## Styling and UI Patterns

### Tailwind CSS Implementation
- **Utility-First Approach**: Compose styles using Tailwind utility classes
- **Responsive Design**: Use responsive prefixes (`sm:`, `md:`, `lg:`) for breakpoint-specific styles
- **Dark Mode Support**: Implement `dark:` variants for all color-related utilities
- **Semantic Color Usage**: Use semantic colors (`foreground`, `background`) over specific colors

### Dark/Light Mode Standards
- **Dual Theme Support**: Every visual element must support both light and dark themes
- **Color Pairing Pattern**: 
  - Light: `bg-zinc-50`, `text-black`, `text-zinc-600`
  - Dark: `bg-black`, `text-zinc-50`, `text-zinc-400`
- **Image Theming**: Use `dark:invert` class for logos and icons that need theme adaptation
- **Hover States**: Provide theme-appropriate hover states for interactive elements

### Layout and Spacing Conventions
- **Flexbox Layouts**: Use Flexbox for component layouts (`flex`, `items-center`, `justify-center`)
- **Responsive Spacing**: Use consistent spacing scale (`gap-4`, `gap-6`, `py-32`, `px-16`)
- **Container Patterns**: Use `max-w-*` classes for content width constraints
- **Responsive Behavior**: Implement mobile-first responsive design with `sm:` breakpoints

## Component Development Patterns

### Next.js App Router Conventions
- **Server Components**: Default to server components unless client interactivity is needed
- **Metadata Export**: Export metadata objects for SEO and page information
- **Layout Composition**: Use nested layouts for shared UI elements
- **Font Integration**: Use `next/font` for optimized font loading

### React Component Patterns
- **Hook Usage**: Leverage React hooks for state management and side effects
- **Children Pattern**: Use `children: React.ReactNode` for component composition
- **Conditional Rendering**: Use logical operators for conditional UI elements
- **Event Handling**: Implement proper event handlers with TypeScript types

### Image and Asset Handling
- **Next.js Image Component**: Always use `next/image` for optimized image loading
- **Priority Loading**: Set `priority` prop for above-the-fold images
- **Alt Text**: Provide descriptive alt text for accessibility
- **Responsive Images**: Use appropriate width and height attributes

## Configuration and Build Standards

### TypeScript Configuration
- **Strict Mode**: Enable strict TypeScript checking for type safety
- **Path Mapping**: Use path aliases for clean import statements
- **Target Compatibility**: Target ES2017+ for modern browser support
- **JSX Configuration**: Use `react-jsx` transform for optimal bundle size

### Next.js Configuration Patterns
- **TypeScript Config**: Use `.ts` extension for Next.js configuration files
- **Minimal Configuration**: Keep configuration minimal and explicit
- **Type Safety**: Import and use `NextConfig` type for configuration objects
- **Comment Documentation**: Include comments for configuration options

### Development Environment
- **Package Manager**: Exclusively use PNPM for package management
- **Lock Files**: Commit `pnpm-lock.yaml` for reproducible builds
- **Workspace Configuration**: Use `pnpm-workspace.yaml` for monorepo setups
- **Script Naming**: Use standard npm script names (`dev`, `build`, `start`, `lint`)

## Accessibility and User Experience

### Semantic HTML Patterns
- **Proper Markup**: Use semantic HTML elements (`main`, `section`, `article`)
- **ARIA Labels**: Provide appropriate ARIA labels for interactive elements
- **Focus Management**: Ensure proper focus states for keyboard navigation
- **Screen Reader Support**: Test with screen readers for accessibility compliance

### Performance Optimization
- **Image Optimization**: Use Next.js image optimization features
- **Font Loading**: Implement proper font loading strategies with `next/font`
- **Code Splitting**: Leverage automatic code splitting for optimal performance
- **Bundle Analysis**: Monitor bundle sizes and optimize when necessary

### Responsive Design Principles
- **Mobile-First**: Design and develop for mobile devices first
- **Flexible Layouts**: Use flexible units and responsive design patterns
- **Touch Targets**: Ensure adequate touch target sizes for mobile devices
- **Cross-Browser Testing**: Test across different browsers and devices

## Code Documentation and Comments

### Comment Standards
- **Configuration Comments**: Document configuration options and their purposes
- **Complex Logic**: Add comments for complex business logic or algorithms
- **API Documentation**: Document component props and return types
- **TODO Comments**: Use TODO comments for future improvements

### Documentation Patterns
- **README Files**: Maintain comprehensive README documentation
- **Type Documentation**: Use JSDoc comments for complex type definitions
- **Component Documentation**: Document component usage and examples
- **API Documentation**: Document API endpoints and data structures

## Error Handling and Validation

### Error Boundaries
- **Component Error Handling**: Implement error boundaries for component failures
- **Graceful Degradation**: Provide fallback UI for error states
- **Error Logging**: Implement proper error logging and monitoring
- **User Feedback**: Provide clear error messages to users

### Form Validation
- **Client-Side Validation**: Implement real-time form validation
- **Server-Side Validation**: Always validate data on the server side
- **Error Display**: Show validation errors clearly to users
- **Accessibility**: Ensure error messages are accessible to screen readers

This comprehensive set of guidelines ensures consistent, maintainable, and high-quality code across the survey research platform while supporting modern web development best practices and accessibility standards.