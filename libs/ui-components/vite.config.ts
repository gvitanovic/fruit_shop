import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root: resolve(__dirname),
    plugins: [react()],
    css: {
        postcss: {}
    },
    build: {
        outDir: resolve(__dirname, '../../dist/libs/ui-components'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'UIComponents',
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'next',
                'next/link',
                'next/navigation',
                'next/image',
                'lucide-react',
                'framer-motion',
                'use-debounce',
                '@fruit-shop/domain',
                '@fruit-shop/hooks'
            ],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                    'next': 'Next',
                    'next/link': 'NextLink',
                    'next/navigation': 'NextNavigation',
                    'next/image': 'NextImage',
                    'lucide-react': 'LucideReact',
                    'framer-motion': 'FramerMotion',
                    'use-debounce': 'UseDebounce',
                    '@fruit-shop/domain': 'Domain',
                    '@fruit-shop/hooks': 'Hooks'
                }
            }
        }
    },
    esbuild: {
        target: 'es2020'
    }
});
