import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProd = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'animation-vendor': ['framer-motion', 'gsap'],
              'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
            },
          },
        },
        chunkSizeWarningLimit: 1000,
        minify: isProd ? 'terser' : false,
        terserOptions: isProd ? {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.warn'],
          },
        } : undefined,
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion'],
        exclude: [],
      },
    };
});
