// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site URL for deployment
  site: 'https://msch13.website',

  // Output mode - static by default for portfolio
  output: 'static',

  // Vite configuration
  vite: {
    css: {
      preprocessorOptions: {}
    }
  },

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },

  // Image optimization
  image: {
    // Configurations for image optimization
  },

  // Integrations
  integrations: [],

  // Server configuration for development
  server: {
    port: 3000,
    host: true
  },

  // Preview server configuration
  preview: {
    port: 3000,
    host: true
  }
});
