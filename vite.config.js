import { defineConfig } from 'vite'

// Dynamically import @vitejs/plugin-react when available to avoid
// hard dependency conflicts during dev install.
export default defineConfig(async () => {
  plugins: [react()],
  base: '/portfolio/'
  try {
    const mod = await import('@vitejs/plugin-react')
    if (mod && mod.default) plugins.push(mod.default())
  } catch (e) {
    // plugin not installed or incompatible — continue without it
    // This keeps the dev server runnable; React JSX will still work via esbuild.
    console.warn('@vitejs/plugin-react not loaded:', e && e.message)
  }

  return { plugins }
})
