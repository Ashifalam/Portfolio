import { execSync } from 'child_process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom plugin to generate version.json with real git data
function generateVersionPlugin() {
  return {
    name: 'generate-version',
    generateBundle() {
      try {
        // Get git information
        const commitHash = execSync('git rev-parse HEAD', {
          encoding: 'utf8',
        }).trim();
        const commitMessage = execSync('git log -1 --pretty=format:"%s"', {
          encoding: 'utf8',
        }).trim();
        const branch = execSync('git branch --show-current', {
          encoding: 'utf8',
        }).trim();
        const author = execSync('git log -1 --pretty=format:"%an"', {
          encoding: 'utf8',
        }).trim();
        const timestamp = execSync('git log -1 --pretty=format:"%aI"', {
          encoding: 'utf8',
        }).trim();

        // Get package version
        const packageJson = JSON.parse(
          execSync('cat package.json', { encoding: 'utf8' }),
        );
        const version = packageJson.version || '1.0.0';

        // Create version object
        const versionInfo = {
          commitHash,
          commitMessage,
          branch,
          author,
          commitTimeStamp: timestamp,
          deployedBy: 'Build Process',
          version: `v${version}`,
          buildAt: `${new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Kolkata' }).replace(' ', 'T')}+05:30`,
        };

        // Emit the version.json file to the build output
        this.emitFile({
          type: 'asset',
          fileName: 'version.json',
          source: JSON.stringify(versionInfo, null, 2),
        });

        console.log('✅ Generated version.json with current git data');
      } catch (error) {
        console.warn('⚠️  Could not generate version.json:', error.message);

        // Fallback version info if git commands fail
        const fallbackVersion = {
          commitHash: 'unknown',
          commitMessage: 'Build without git info',
          branch: 'unknown',
          author: 'Unknown',
          timestamp: new Date().toISOString(),
          deployedBy: 'Build Process',
          version: 'v1.0.0',
          buildAt: new Date().toISOString(),
        };

        this.emitFile({
          type: 'asset',
          fileName: 'version.json',
          source: JSON.stringify(fallbackVersion, null, 2),
        });
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generateVersionPlugin()],
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['react-icons'],
          utils: ['@emailjs/browser'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Enable source maps for debugging (optional)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@emailjs/browser'], // Load on demand
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },
  // Enable compression
  esbuild: {
    drop: ['console', 'debugger'], // Remove console.logs and debuggers
  },
});
