import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname),
    css: {
        postcss: {}
    },
    build: {
        outDir: resolve(__dirname, '../../dist/libs/domain'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Domain',
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    },
    esbuild: {
        target: 'es2020'
    }
});
