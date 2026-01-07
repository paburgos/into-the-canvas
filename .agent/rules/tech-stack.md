---
trigger: always_on
---

the web app is a e-commerce for my oil painting. always use this teck stack during development:


## Frontend Framework & Runtime
- **Next.js 15.2.0** - React-based full-stack framework with App Router
- **React 18.3.1** - Core UI library
- **TypeScript** - Type-safe JavaScript development

## Styling & UI
- **Tailwind CSS** - Utility-first CSS framework (configured in `tailwind.config.ts`)
- **Radix UI** - Headless UI components library:
  - Accordion, Dialog, Dropdown Menu, Hover Card
  - Separator, Slot, Tabs, Tooltip components
- **Framer Motion 12.5.0** - Animation library
- **GSAP 3.12.7** - Advanced animations
- **Lottie React 2.4.1** - Lottie animations
- **Maven Pro** - Google Font (loaded via `next/font`)

## State Management & Utilities
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional CSS classes
- **React Spring** - Spring-physics animations
- **Embla Carousel** - Carousel/slider component

## UI Enhancement Libraries
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Next Themes** - Dark/light theme management

## Backend & Data
- **Azure Data Tables 13.3.1** - NoSQL database service
- **Next.js API Routes** - Server-side API endpoints

## Analytics & Monitoring
- **Microsoft Application Insights** - Performance monitoring and analytics
  - Web SDK (`@microsoft/applicationinsights-web`)
  - Node.js SDK (`applicationinsights`)

## Development & Build Tools
- **Bun** - Package manager and runtime (as seen in `bun.lock`)
- **Turbopack** - Fast bundler (available via `--turbopack` flag)
- **ESLint** - Code linting
- **Playwright** - End-to-end testing framework

## Deployment & Hosting
- **Azure Web Apps** - Primary hosting platform
- **Azure Static Web Apps** - Alternative hosting (configured)
- **Netlify** - Additional deployment option (configured)
- **Standalone Output** - Self-contained deployment mode

## Configuration Features
- **Internationalization (i18n)** support
- **Image optimization** with multiple domains (Unsplash, custom assets)
- **Trailing slash** URLs
- **Custom webpack configuration** for Azure dependencies
- **Theme system** with system preference detection

## Key Architecture Patterns
- **App Router** - Next.js 15's file-based routing
- **Server Components** - React Server Components support
- **Client-side hydration** with `ClientBody` wrapper
- **Environment-based configuration** for different deployment targets