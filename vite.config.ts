import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": "/src",
            "@assets": "/src/assets",
            "@scss": "/src/scss",
            "@components": "/src/components",
            "@views": "/src/views",
            "@services": "/src/services",
        },
    },
});
