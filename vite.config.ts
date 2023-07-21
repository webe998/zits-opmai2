import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {join} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte()
    ],
    server: {
        proxy: {
            "/api": {
                target: "https://apis.palette.fm/try-for-free",
                secure: false,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },

    resolve: {
        alias: {
            '@': join(__dirname, "src"),
        }
    }
})
