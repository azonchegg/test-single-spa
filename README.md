# Single-SPA Vue 3 TypeScript Project with Vite

This is a single-spa micro-frontend application with Vue 3 and TypeScript, built with Vite. The project consists of a root application with a header navigation and three separate micro-frontends, each running independently.

## Project Structure

```
test-single-spa/
├── src/                    # Root application
│   ├── root-config.ts     # Single-SPA configuration
│   └── index.html         # Root HTML with header
├── apps/                   # Micro-frontends
│   ├── app1/              # Dashboard app (port 9001)
│   ├── app2/              # Analytics app (port 9002)
│   └── app3/              # Settings app (port 9003)
├── vite.config.ts         # Root Vite configuration
└── package.json           # Root package.json
```

## Features

- **Root Application**: Provides a header with navigation between apps
- **Three Micro-Frontends**: Each app is a separate Vue 3 + TypeScript project
- **No Page Reload**: Navigation between apps happens without page refresh
- **Independent Projects**: Each app has its own `package.json` and build configuration
- **TypeScript**: Full TypeScript support across all projects
- **Vite**: Fast development and optimized production builds

## Setup Instructions

### 1. Install Root Dependencies

```bash
npm install
```

### 2. Install All App Dependencies

```bash
npm run install:all
```

Or manually install each app:

```bash
cd apps/app1 && npm install && cd ../..
cd apps/app2 && npm install && cd ../..
cd apps/app3 && npm install && cd ../..
```

### 3. Start Development Servers

You need to run all servers simultaneously. Open **4 separate terminal windows**:

**Terminal 1 - Root Application:**
```bash
npm start
```
This will start on `http://localhost:9000`

**Terminal 2 - App 1:**
```bash
cd apps/app1
npm start
```
This will start on `http://localhost:9001`

**Terminal 3 - App 2:**
```bash
cd apps/app2
npm start
```
This will start on `http://localhost:9002`

**Terminal 4 - App 3:**
```bash
cd apps/app3
npm start
```
This will start on `http://localhost:9003`

### 4. Access the Application

Open your browser and navigate to `http://localhost:9000`

Use the header navigation to switch between apps without page reload.

## Apps Description

- **App 1 (Dashboard)**: A dashboard with a counter feature
- **App 2 (Analytics)**: An analytics dashboard with a chart visualization
- **App 3 (Settings)**: A settings page with toggle switches

## Building for Production

To build all applications for production:

```bash
# Build root
npm run build

# Build each app
cd apps/app1 && npm run build
cd ../app2 && npm run build
cd ../app3 && npm run build
```

## Technology Stack

- **Single-SPA**: Framework for building micro-frontends
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Typed superset of JavaScript
- **Vite**: Next generation frontend build tool

## Notes

- Each app runs on a different port to simulate independent deployments
- The root application uses hash-based routing to navigate between apps
- All apps are loaded dynamically without page reload
- In development mode, Vite uses ESM modules for fast HMR
- In production mode, apps are built as IIFE bundles for optimal loading
- CORS headers are configured to allow cross-origin requests during development
