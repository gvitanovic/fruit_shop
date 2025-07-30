import '@testing-library/jest-dom'
import React from 'react'

// Mock Next.js router
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
        refresh: jest.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, ...props }: any) =>
        React.createElement('img', { src, alt, ...props })
}))

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
    ShoppingCart: () => React.createElement('div', { 'data-testid': 'shopping-cart-icon' }, 'Cart'),
    User: () => React.createElement('div', { 'data-testid': 'user-icon' }, 'User'),
    Search: () => React.createElement('div', { 'data-testid': 'search-icon' }, 'Search'),
    Plus: () => React.createElement('div', { 'data-testid': 'plus-icon' }, 'Plus'),
    Minus: () => React.createElement('div', { 'data-testid': 'minus-icon' }, 'Minus'),
    Trash2: () => React.createElement('div', { 'data-testid': 'trash-icon' }, 'Trash'),
    X: () => React.createElement('div', { 'data-testid': 'x-icon' }, 'X'),
    Eye: () => React.createElement('div', { 'data-testid': 'eye-icon' }, 'Eye'),
}))

// Mock React Query
jest.mock('@tanstack/react-query', () => ({
    ...jest.requireActual('@tanstack/react-query'),
    QueryClient: jest.fn(() => ({
        clear: jest.fn(),
        removeQueries: jest.fn(),
        cancelQueries: jest.fn(),
        invalidateQueries: jest.fn(),
        fetchQuery: jest.fn(),
        getQueryData: jest.fn(),
        setQueryData: jest.fn(),
    })),
    QueryClientProvider: ({ children }: any) => children,
    useQuery: jest.fn(),
    useMutation: jest.fn(),
}));

// Clean up after each test
afterEach(() => {
    jest.clearAllMocks()
})
