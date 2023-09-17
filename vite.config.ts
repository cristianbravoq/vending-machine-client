import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@contexts', replacement: path.resolve( path.join(__dirname, '/src/contexts')) },
      { find: '@components', replacement: path.resolve( path.join(__dirname, '/src/components'))},
      { find: '@models', replacement: path.resolve(path.join(__dirname, '/src/models'))},
      { find: '@services', replacement: path.resolve(path.join(__dirname, '/src/services'))},
      { find: '@utilities', replacement: path.resolve(path.join(__dirname, '/src/utilities'))},
      { find: '@assets', replacement: path.resolve(path.join(__dirname, '/src/assets'))},
      { find: '@routes', replacement: path.resolve(path.join(__dirname, '/src/routes'))},
      { find: '@pages', replacement: path.resolve(path.join(__dirname, '/src/pages'))},
    ],
  },
})
