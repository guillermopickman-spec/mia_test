# Market Intelligence Agent - Phase 0

Autonomous Market Auditing & Technical Reconnaissance Engine

## Overview

This is Phase 0 of the Market Intelligence Agent project - a frontend-only deployment ready for Vercel.

## Features

- **Dashboard**: Overview of agent activity and statistics
- **Agent Terminal**: Interactive interface for communicating with the agent
- **Reports**: View and manage generated intelligence reports

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

This project is configured for deployment on Vercel. The frontend folder contains the Next.js application.

### Quick Vercel Setup

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "Add New Project"** and import `guillermopickman-spec/mia_test`
3. **⚠️ IMPORTANT: Set Root Directory to `frontend`**
4. **Click "Deploy"** - Vercel will auto-detect Next.js

**For detailed step-by-step instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)**

### Key Settings

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| **Root Directory** | **`frontend`** ⚠️ |
| Build Command | `npm run build` |
| Output Directory | `.next` (auto) |

The `vercel.json` in the frontend folder is already configured for Next.js 15.

## Project Structure

```
frontend/
├── app/              # Next.js app router pages
│   ├── agent/        # Agent terminal page
│   ├── reports/      # Reports page
│   └── page.tsx      # Dashboard page
├── components/       # React components
├── lib/             # Utility functions
└── public/          # Static assets
```

## Phase Status

### Phase 0: ✅ COMPLETED
- Frontend UI with navigation
- Mock data for demonstration
- Responsive design
- Ready for Vercel deployment

### Phase 2: ✅ COMPLETED
- Mock API service layer (`lib/mockApi.ts`)
- React hooks for data fetching (`lib/queries.ts`)
- Loading states and error handling
- Dashboard and Reports pages using hooks
- Error boundary components
- SSR-safe implementation

## Environment Variables

For Vercel deployment, set the following environment variable:

- `NEXT_PUBLIC_USE_MOCK_API=true` - Enables mock API mode (default: true)

When ready to connect to real backend:
- `NEXT_PUBLIC_USE_MOCK_API=false`
- `NEXT_PUBLIC_API_URL=https://your-backend-url.com`

Backend integration will be added in Phase 3.

## License

Private project
