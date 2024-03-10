import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxying requests starting with /Vehicles/
      '/Vehicles/': {
        target: 'https://vg02capstone.cyclic.app',
        changeOrigin: true,
        secure: false,
        // No need to rewrite the path here since we're matching the target path
      }
    }
  }
});
