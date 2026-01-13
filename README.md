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

### Vercel Configuration

- Framework: Next.js
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Output Directory: `.next`

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

## Phase 0 Status

This phase includes:
- ✅ Frontend UI with navigation
- ✅ Mock data for demonstration
- ✅ Responsive design
- ✅ Ready for Vercel deployment

Backend integration will be added in future phases.

## License

Private project
