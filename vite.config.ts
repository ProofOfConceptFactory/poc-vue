import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import type { ServerOptions } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';

    const serverConfig: ServerOptions = {
        host: true,
        port: 8000,
    };

    if (isDev) {
        serverConfig.https = {
            key: fs.readFileSync('certs/poc-vue.key.pem'),
            cert: fs.readFileSync('certs/poc-vue.crt.pem'),
        };
    }

    return {
        plugins: [vue()],
        server: serverConfig
    }
})
