import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src', // Alias @ points to the src directory
        },
    },
    build: {
        chunkSizeWarningLimit: 1000, // Increase the limit to 1000 kB
    },
});
