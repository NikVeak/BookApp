import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from "vite-plugin-svgr"
export default defineConfig({
    plugins: [viteSvgr({
        svgrOptions: {
            ref: true,
        },
    }),react()],
    server: {
        port: 3000,
        host: true
    },
    build: {
        outDir: './build'
    },
});