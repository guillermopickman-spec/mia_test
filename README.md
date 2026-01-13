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

### Phase 3: ✅ COMPLETED
- Real API integration for health and stats endpoints
- API response transformers (`lib/apiTransformers.ts`)
- Enhanced API utility with timeout and error handling
- Dashboard connected to real backend
- Reports and Agent Terminal remain on mock mode

### Phase 4: ✅ COMPLETED
- Reports endpoint integration with real backend
- Reports transformer to map backend format to frontend types
- Reports page displays real mission logs from database
- Title extraction from response content
- Status mapping (COMPLETED → completed, etc.)
- Size calculation from response length
- Agent Terminal remains on mock mode (Phase 5+)

## Environment Variables

### For Phase 2 (Mock Mode):
- `NEXT_PUBLIC_USE_MOCK_API=true` - Enables mock API mode

### For Phase 3+ (Real Backend):
- `NEXT_PUBLIC_USE_MOCK_API=false` - Disables mock mode for health/stats/reports
- `NEXT_PUBLIC_API_URL=https://your-backend-url.com` - Your backend API URL

**Note**: Agent Terminal still uses mock mode in Phase 4. It will be connected in Phase 5+.

### Vercel Configuration:
1. Go to Project Settings → Environment Variables
2. Add `NEXT_PUBLIC_API_URL` with your backend URL (e.g., `https://market-intel-agent.onrender.com`)
3. Set `NEXT_PUBLIC_USE_MOCK_API=false` to enable real API for Dashboard

## License

Private project
