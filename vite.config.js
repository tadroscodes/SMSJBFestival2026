import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: If you deploy to https://<username>.github.io/<repo-name>/
// set `base` below to '/<repo-name>/' (with leading and trailing slashes).
// If you deploy to a custom domain or to <username>.github.io (a "root" pages
// repo named exactly <username>.github.io), leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/SMSJBFestival2026/',
})
