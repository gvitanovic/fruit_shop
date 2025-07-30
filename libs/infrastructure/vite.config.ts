import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname),
    css: {
        postcss: {}
    },
    build: {
        outDir: resolve(__dirname, '../../dist/libs/infrastructure'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Infrastructure',
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['axios', '@fruit-shop/domain'],
            output: {
                globals: {
                    'axios': 'axios',
                    '@fruit-shop/domain': 'Domain'
                }
            }
        }
    }
});
