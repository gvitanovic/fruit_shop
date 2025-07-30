import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname),
    css: {
        postcss: {}
    },
    build: {
        outDir: resolve(__dirname, '../../dist/libs/hooks'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Hooks',
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['react', '@tanstack/react-query', '@fruit-shop/domain', '@fruit-shop/infrastructure'],
            output: {
                globals: {
                    'react': 'React',
                    '@tanstack/react-query': 'ReactQuery',
                    '@fruit-shop/domain': 'Domain',
                    '@fruit-shop/infrastructure': 'Infrastructure'
                }
            }
        }
    }
});
