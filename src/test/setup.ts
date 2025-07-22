import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import React from 'react'

// Setup MSW or other test utilities here if needed
beforeAll(() => {
    // Setup code
})

afterEach(() => {
    cleanup()
})

afterAll(() => {
    // Cleanup code
})

// Mock Next.js router
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        back: vi.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: any) =>
        React.createElement('img', { src, alt, ...props })
}))

// Mock Lucide React icons
vi.mock('lucide-react', () => ({
    ShoppingCart: () => React.createElement('div', { 'data-testid': 'shopping-cart-icon' }, 'ShoppingCart'),
    Eye: () => React.createElement('div', { 'data-testid': 'eye-icon' }, 'Eye'),
    Package: () => React.createElement('div', { 'data-testid': 'package-icon' }, 'Package'),
    Star: () => React.createElement('div', { 'data-testid': 'star-icon' }, 'Star'),
    User: () => React.createElement('div', { 'data-testid': 'user-icon' }, 'User'),
    Search: () => React.createElement('div', { 'data-testid': 'search-icon' }, 'Search'),
    X: () => React.createElement('div', { 'data-testid': 'x-icon' }, 'X'),
    RefreshCw: () => React.createElement('div', { 'data-testid': 'refresh-icon' }, 'RefreshCw'),
}))
