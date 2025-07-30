![Watch the demo](frutty.gif)

# Fruit Shop - Nx Monorepo with BFF Architecture

This project is an enterprise-grade Nx monorepo implementing a Backend for Frontend (BFF) pattern with modular, scalable architecture. The Next.js web application consumes shared libraries for maximum code reuse and maintainability.

## 🏗️ Monorepo Architecture

```
fruit_shop/
├── apps/
│   ├── server/                 # JSON Server backend
│   │   ├── db.json            # Database for JSON Server
│   │   ├── server.js          # Server configuration
│   │   ├── package.json       # Server package configuration
│   │   └── project.json       # Nx project configuration
│   └── web/                   # Next.js application (BFF layer)
│       ├── app/               # Next.js app router & API routes
│       ├── config/            # App-specific configuration
│       ├── public/            # Static assets
│       └── test/              # App-specific tests
└── libs/
    ├── domain/                # Business logic & entities
    ├── infrastructure/        # API management & HTTP clients
    ├── hooks/                 # React hooks
    └── ui-components/         # Shared UI component library
```

## 🎯 Library Architecture

### @fruit-shop/domain
**Business Logic & Entities**
- `entities/` - TypeScript interfaces for core domain objects (Product, Cart, User)
- `services/` - Business logic and calculations (CartService, ProductService, PasswordService)
- Zero dependencies - pure TypeScript domain logic

### @fruit-shop/infrastructure  
**API Management & External Services**
- `api/` - HTTP clients, repositories, and API management
- `ApiManager` - Singleton service for API orchestration
- `AxiosHttpClient` - HTTP client implementation
- Dependencies: axios, @fruit-shop/domain

### @fruit-shop/hooks
**React Hooks for State Management** 
- `useCart` - Cart state management with React Query
- `useProducts` - Product fetching and filtering
- `useUser` - User authentication and profile management
- Dependencies: react, @tanstack/react-query, @fruit-shop/domain, @fruit-shop/infrastructure

### @fruit-shop/ui-components
**Shared UI Component Library**
- **Atoms**: Button, Input, Label, Badge, Spinner
- **Molecules**: Modal, SearchBar, PasswordStrength  
- **Organisms**: ProductCard, Header, ProductFilters
- **Templates**: AppLayout
- **Containers**: ProductsContainer, CartContainer, ProfileContainer
- Dependencies: react, next, lucide-react, @fruit-shop/domain, @fruit-shop/hooks

## 🚀 BFF Pattern Implementation

```
Frontend (React Components)
    ↓
Infrastructure Layer (@fruit-shop/infrastructure)
    ↓
Next.js API Routes (BFF Layer - apps/web/app/api)
    ↓
Backend Server (apps/server - Port 3002)
```

### API Routes (BFF Layer)

The Next.js API routes in `apps/web/app/api/` act as a BFF layer:

- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get specific product  
- `GET /api/suggestions?searchQuery=query` - Product search suggestions
- `GET /api/cart` - Get cart contents
- `POST /api/cart` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `PUT /api/user/password` - Update user password

## 📦 Package Management

This monorepo uses **pnpm** for efficient package management with workspace support:

```json
{
  "scripts": {
    "dev": "cd apps/web && next dev",
    "build": "nx build web", 
    "start": "cd apps/web && next start",
    "lint": "nx lint web",
    "test": "nx test web",
    "test:core": "nx test domain && nx test infrastructure && nx test hooks",
    "server": "pnpm exec nx start server",
    "server:dev": "pnpm exec nx dev server"
  }
}
```

## 🛠️ Development Workflow

### Adding New Applications

```bash
# Add a mobile app
nx g @nx/react-native:app mobile

# Add an admin dashboard  
nx g @nx/next:app admin

# Add a Node.js API server
nx g @nx/node:app api-server

# All apps can import shared libraries:
# import { Button } from '@fruit-shop/ui-components';
# import { useCart } from '@fruit-shop/hooks';
```

### Adding New Libraries

```bash
# Add a new feature library
nx g @nx/react:lib feature-auth

# Add a utility library
nx g @nx/js:lib utils
```

### Building & Testing

```bash
# Build everything
nx build web

# Build specific library
nx build ui-components

# Start the backend server
nx start server

# Run all tests
nx test web

# Test specific library
nx test domain

# Build all libraries
nx run-many --target=build --projects=domain,infrastructure,hooks,ui-components
```

## 🧪 Testing Strategy

### Test Structure
```
apps/web/test/                    # App-specific tests
libs/domain/src/**/*.test.ts      # Domain logic unit tests  
libs/infrastructure/src/**/*.test.ts # API integration tests
libs/hooks/src/**/*.test.ts       # Hook behavior tests
libs/ui-components/src/**/*.test.tsx # Component tests
```

### Test Coverage by Library

#### @fruit-shop/domain (Unit Tests)
- **CartService**: Total calculations, quantity management, item grouping
- **ProductService**: Filtering, sorting, search functionality  
- **PasswordService**: Validation, strength calculation

#### @fruit-shop/infrastructure (Integration Tests)
- **ApiManager**: HTTP client orchestration
- **Repositories**: API endpoint testing, error handling
- **AxiosHttpClient**: HTTP request/response handling

#### @fruit-shop/hooks (Hook Tests)
- **useCart**: Cart state, optimistic updates, error handling
- **useProducts**: Product fetching, filtering, caching
- **useUser**: Authentication flows, profile management

#### @fruit-shop/ui-components (Component Tests)  
- **Atoms**: Basic UI component behavior
- **Molecules**: Component composition and interactions
- **Organisms**: Complex component integration
- **Containers**: Full feature testing with mocked dependencies

### Running Tests

```bash
# Test entire workspace
nx test web

# Test individual libraries  
nx test domain
nx test infrastructure
nx test hooks
nx test ui-components

# Test with coverage
nx test web --coverage

# Test in watch mode
nx test domain --watch
## 🔧 Configuration

### Environment Variables

```env
# apps/web/.env.local
EXTERNAL_SERVER_URL=http://localhost:3002
MOCK_SERVER_URL=http://localhost:3002
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=https://fruitshop.com
```

### TypeScript Configuration

The monorepo uses TypeScript project references for optimal build performance:

```json
// Root tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@fruit-shop/domain": ["./libs/domain/src/index.ts"],
      "@fruit-shop/infrastructure": ["./libs/infrastructure/src/index.ts"], 
      "@fruit-shop/hooks": ["./libs/hooks/src/index.ts"],
      "@fruit-shop/ui-components": ["./libs/ui-components/src/index.ts"]
    }
  }
}
```

### Nx Configuration

```json
// nx.json
{
  "defaultProject": "web",
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "cache": true
    }
  }
}
```

## 🎨 Design System

### Component Import Examples

```typescript
// Import UI components
import { 
  Button, 
  Input, 
  ProductCard, 
  Header 
} from '@fruit-shop/ui-components';

// Import business logic
import { 
  Product, 
  Cart, 
  CartService 
} from '@fruit-shop/domain';

// Import React hooks
import { 
  useCart, 
  useProducts, 
  useAddToCart 
} from '@fruit-shop/hooks';

// Import API clients
import ApiManager from '@fruit-shop/infrastructure';
```

### Atomic Design Implementation

- **Atoms** (`libs/ui-components/src/lib/atoms/`): Button, Input, Label, Badge
- **Molecules** (`libs/ui-components/src/lib/molecules/`): Modal, SearchBar, CartErrorBoundary
- **Organisms** (`libs/ui-components/src/lib/organisms/`): ProductCard, Header, ProductFilters  
- **Templates** (`libs/ui-components/src/lib/templates/`): AppLayout
- **Containers** (`libs/ui-components/src/lib/containers/`): ProductsContainer, CartContainer

## 🚀 Performance & SEO

### Build Optimizations
- **Library Caching**: Nx caches unchanged library builds
- **Incremental Builds**: Only rebuilds what changed
- **Tree Shaking**: Dead code elimination across libraries
- **Bundle Splitting**: Automatic code splitting by library

### SEO Features
- **Static Site Generation**: Pre-rendered pages for optimal SEO
- **Structured Data**: JSON-LD schema markup
- **Meta Tags**: Open Graph, Twitter Card, SEO optimization
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: SEO-friendly crawler configuration

## 🔒 Benefits of This Architecture

### Scalability
- **Multiple Apps**: Easy to add mobile app, admin dashboard, etc.
- **Shared Code**: Common logic in libraries prevents duplication
- **Independent Deployment**: Apps can be deployed separately

### Maintainability  
- **Clear Boundaries**: Each library has single responsibility
- **Type Safety**: Full TypeScript support across all libraries
- **Dependency Management**: Clear dependency graph prevents circular imports

### Developer Experience
- **Fast Builds**: Nx task caching and incremental builds
- **Hot Reloading**: Library changes auto-reload in development
- **IntelliSense**: Full IDE support with path mapping

### Team Collaboration
- **Library Ownership**: Teams can own specific libraries
- **API Contracts**: Clear interfaces between libraries
- **Testing Isolation**: Libraries can be tested independently

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
pnpm install

# Start development server (web)
pnpm dev

# Start backend server
pnpm server

# Build for production
pnpm build

# Run tests
pnpm test

# Build all libraries
nx run-many --target=build --all
```

## 📚 Library Dependencies

```
web (Next.js app)
├── @fruit-shop/ui-components
│   ├── @fruit-shop/hooks
│   │   ├── @fruit-shop/domain
│   │   └── @fruit-shop/infrastructure
│   │       └── @fruit-shop/domain
│   └── @fruit-shop/domain
├── config/
└── apps/server (JSON Server)
    └── @fruit-shop/domain (for types)
```

This dependency graph ensures clean separation of concerns and prevents circular dependencies.

## 🎯 Next Steps

With this Nx monorepo structure, you can:

1. **Add New Apps**: Mobile app, admin dashboard, marketing site
2. **Extend Libraries**: Add new UI components, business logic, or API integrations  
3. **Scale Teams**: Different teams can own different libraries
4. **Deploy Independently**: Each app can have its own deployment pipeline
5. **Share Code**: Maximum code reuse across all applications

The monorepo is production-ready and follows enterprise-grade patterns for long-term scalability! 🚀
