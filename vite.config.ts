import { cloudflare } from '@cloudflare/vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        cloudflare({ viteEnvironment: { name: 'ssr' } }),
        tanstackStart({ srcDirectory: 'app' }),
        viteReact(),
        tsConfigPaths(),
    ],
})
