/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.ts'],
        globals: true,
        include: ['src/**/*.test.{ts,tsx}'],
        css: false, // Disable CSS processing in tests
    },
})
