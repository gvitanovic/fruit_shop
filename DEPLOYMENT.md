# Deployment Guide

## Vercel Deployment

### Prerequisites

1. **Vercel Account**: Create an account at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Already installed as dev dependency

### Setup Steps

#### 1. Connect to Vercel
```bash
pnpm vercel login
```

#### 2. Link Project
```bash
pnpm vercel link
```

#### 3. Set Environment Variables
In your Vercel dashboard, add these environment variables:
- `NODE_ENV=production`
- `NEXT_PUBLIC_API_URL=https://your-api-server.vercel.app/api`

#### 4. Get Vercel Project Info
```bash
pnpm vercel env ls
```

### GitHub Actions Setup

#### Required Secrets
Add these secrets to your GitHub repository settings:

1. **VERCEL_TOKEN**: Get from Vercel Settings → Tokens
2. **VERCEL_ORG_ID**: Found in your project settings
3. **VERCEL_PROJECT_ID**: Found in your project settings

#### Auto-deployment
- Push to `main` branch triggers production deployment
- Pull requests trigger preview deployments

### Manual Deployment

#### Preview Deployment
```bash
pnpm preview
```

#### Production Deployment
```bash
pnpm deploy
```

### Build Process

The deployment follows this sequence:
1. Install dependencies (`pnpm install`)
2. Build libraries (`pnpm build:libs`)
3. Build Next.js app (`pnpm nx build web`)
4. Deploy to Vercel

### Monorepo Configuration

- **Root**: `/Users/gv/Projects/fruit_shop`
- **Web App**: `apps/web`
- **Libraries**: Built to `dist/libs/`
- **Framework**: Next.js
- **Build Command**: `pnpm build:libs && pnpm nx build web`
- **Output Directory**: `apps/web/.next`

### Troubleshooting

#### Build Failures
1. Check library builds: `pnpm build:libs`
2. Check Next.js build: `pnpm nx build web`
3. Verify environment variables

#### Deployment Issues
1. Check Vercel logs in dashboard
2. Verify project settings
3. Check GitHub Actions logs

### URLs
- **Production**: Will be provided after first deployment
- **Preview**: Generated for each PR
- **Dashboard**: https://vercel.com/dashboard
