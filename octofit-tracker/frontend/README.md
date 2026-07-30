<!-- Modified by AI on 07/30/2026. Edit #1. -->
# Octofit Tracker Frontend

This React 19 presentation tier uses Vite, Bootstrap, and `react-router-dom` to display Octofit Tracker API data.

## Environment

`VITE_CODESPACE_NAME` must be defined when running in GitHub Codespaces so the frontend can call the forwarded backend API URL:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

For local development, the app safely falls back to `http://localhost:8000/api/` when `VITE_CODESPACE_NAME` is unset. In Codespaces, requests use `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/`. If the variable is missing while running from the forwarded `5173` Codespaces URL, the app derives the Codespace name from the current browser hostname instead of creating an `https://undefined-8000...` URL.

Create `.env.local` in this directory for local Vite environment variables.

## Commands

```bash
npm --prefix octofit-tracker/frontend install
npm --prefix octofit-tracker/frontend run dev
npm --prefix octofit-tracker/frontend run build
```
