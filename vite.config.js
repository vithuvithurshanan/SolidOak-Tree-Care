import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin: inject <link rel="preload"> for the main CSS chunk
function preloadCssPlugin() {
  return {
    name: 'preload-css',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html
      const cssFiles = Object.keys(ctx.bundle).filter(
        (f) => f.endsWith('.css') && f.includes('index')
      )
      const tags = cssFiles.map((f) => ({
        tag: 'link',
        attrs: { rel: 'preload', as: 'style', href: `/${f}` },
        injectTo: 'head-prepend',
      }))
      return { html, tags }
    },
  }
}

export default defineConfig({
  plugins: [react(), preloadCssPlugin()],
  resolve: {
    alias: {
      'react':                'preact/compat',
      'react-dom':            'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react/jsx-runtime':    'preact/jsx-runtime',
    },
  },
  build: {
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  // Replace development chunk paths with production equivalents
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})
