import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Umamusume music sharing web app.
// See https://vitejs.dev/config/ for more details on available options.

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/umamusume-music-app/' : '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    cors: true,
    hmr: {
      port: 24678,
      host: 'localhost'
    },
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log
        drop_debugger: true, // Eliminar debugger
        // Configuración segura para React
        unsafe: false,
        unsafe_arrows: false,
        unsafe_comps: false,
        unsafe_Function: false,
        unsafe_math: false,
        unsafe_symbols: false,
        unsafe_methods: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false,
      },
      mangle: {
        // Configuración segura - no tocar propiedades importantes
        reserved: ['React', 'ReactDOM', 'Component', 'createElement'],
        properties: false, // NO ofuscar propiedades
      },
      format: {
        comments: false, // Eliminar comentarios
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React y ReactDOM en su propio chunk
          'react-vendor': ['react', 'react-dom'],
          // Separar react-router en su propio chunk
          'router': ['react-router-dom'],
          // Separar Swiper en su propio chunk (se carga solo cuando se necesita)
          'swiper': ['swiper/react', 'swiper/modules']
        },
        // Usar nombres descriptivos en vez de hashes para debugging
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimizar el tamaño de chunk
    chunkSizeWarningLimit: 1000
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    cors: true
  }
});
