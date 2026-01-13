# Vercel Deployment Guide

Complete step-by-step guide to deploy Market Intelligence Agent to Vercel (Phase 0-3).

## Prerequisites

- A GitHub account (you already have the repo: `guillermopickman-spec/mia_test`)
- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)

## Step-by-Step Deployment

### Step 1: Sign in to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Sign in with your GitHub account (recommended for easy integration)

### Step 2: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find and click **"mia_test"** (or search for `guillermopickman-spec/mia_test`)
4. Click **"Import"**

### Step 3: Configure Project Settings

**⚠️ IMPORTANT: The Root Directory setting is critical!**

1. In the **"Configure Project"** screen, you'll see several settings:

   **Project Name:**
   - Default: `mia_test` (you can change this if you want)
   - Example: `market-intel-agent` or `mia-phase0`

   **Framework Preset:**
   - Should auto-detect as **"Next.js"**
   - If not, select **"Next.js"** from the dropdown

   **Root Directory:**
   - ⚠️ **This is the most important setting!**
   - Click **"Edit"** next to Root Directory
   - Change from `./` to `frontend`
   - This tells Vercel where your Next.js app is located

   **Build and Output Settings:**
   - Build Command: `npm run build` (or leave default)
   - Output Directory: `.next` (or leave default - Next.js handles this)
   - Install Command: `npm install` (or leave default)

   **Environment Variables:**
   - `NEXT_PUBLIC_USE_MOCK_API=true` (for Phase 2 - enables mock API mode)
   - `NEXT_PUBLIC_API_URL` (for Phase 3+ - your backend URL)
   - You can add these in Project Settings → Environment Variables after deployment

### Step 4: Deploy

1. Click **"Deploy"** button
2. Vercel will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your Next.js app (`npm run build`)
   - Deploy to a global CDN

3. Wait for the build to complete (usually 1-3 minutes)

### Step 5: Access Your Deployed App

Once deployment is complete:

1. You'll see a **"Congratulations"** screen
2. Your app will be live at a URL like:
   - `https://mia-test.vercel.app` (or your custom domain)
3. Click **"Visit"** to open your deployed application

## Post-Deployment

### Viewing Your Deployment

- **Production URL**: Your main deployment URL
- **Preview Deployments**: Every push to GitHub creates a new preview deployment
- **Deployment History**: View all deployments in the Vercel dashboard

### Custom Domain (Optional)

1. Go to your project settings
2. Click **"Domains"**
3. Add your custom domain (e.g., `mia.yourdomain.com`)
4. Follow DNS configuration instructions

### Environment Variables

**For Phase 2 (Current):**
1. Go to **Project Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_USE_MOCK_API` = `true` (enables mock API mode)

**For Phase 3+ (Backend Integration):**
1. Update environment variables:
   - `NEXT_PUBLIC_USE_MOCK_API` = `false` (disables mock for health/stats)
   - `NEXT_PUBLIC_API_URL` = `https://your-backend-url.com` (e.g., `https://market-intel-agent.onrender.com`)
2. **Important**: Ensure your backend has CORS configured to allow your Vercel domain
3. Test the connection by checking the Dashboard - it should show real backend data
4. Reports and Agent Terminal will still use mock mode until Phase 4+

## Troubleshooting

### Build Fails

**Error: "Cannot find module"**
- Make sure **Root Directory** is set to `frontend`
- Check that `package.json` exists in the `frontend` folder

**Error: "Build command failed"**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally first

### App Not Loading

- Check deployment logs in Vercel dashboard
- Verify the Root Directory is `frontend`
- Ensure `vercel.json` is in the `frontend` folder

### Phase 3: Backend Connection Issues

**Error: "Cannot connect to backend"**
- Verify `NEXT_PUBLIC_API_URL` is set correctly in Vercel
- Check that backend is accessible (try opening URL in browser)
- Verify CORS is configured on backend to allow Vercel domain
- Check backend logs for any errors

**Error: "CORS error"**
- Backend must allow requests from your Vercel domain
- Add Vercel domain to backend CORS allowed origins
- Example: `https://your-app.vercel.app`

**Dashboard shows errors but backend is online**
- Check browser console for specific error messages
- Verify backend `/health` and `/stats` endpoints are working
- Test endpoints directly: `{API_URL}/health` and `{API_URL}/stats`

### Wrong Framework Detected

- Manually set Framework Preset to **"Next.js"**
- Or ensure `package.json` has Next.js as a dependency

## Quick Reference

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Root Directory | `frontend` |
| Build Command | `npm run build` |
| Output Directory | `.next` (auto) |
| Install Command | `npm install` |

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

## Updating Your Deployment

Simply push changes to GitHub:
```bash
git add .
git commit -m "Your changes"
git push
```

Vercel will automatically detect the changes and redeploy!

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
