# Front Runners Website

A modern, multilingual website for Front Runners - helping organizations structurally grow towards better employership.

## Features

- 🌐 **Multilingual Support** - Dutch (NL) and English (EN) with automatic language detection
- 📝 **Brochure Request Form** - Modal form that sends submissions to Discord webhook
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal performance
- 🔒 **Server-side API** - Secure form handling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. **Extract the zip file** to a folder of your choice

2. **Open terminal/command prompt** and navigate to the folder:
   ```bash
   cd frontrunners-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**: http://localhost:3000

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Upload" and select the project folder
3. Configure project name and settings
4. Click "Deploy"

## Environment Variables

Set these in your Vercel project settings under "Environment Variables":

| Variable | Description | Required |
|----------|-------------|----------|
| `DISCORD_WEBHOOK_URL` | Discord webhook for form submissions | Yes |

The Discord webhook is already configured in the code, but you can override it with an environment variable for security.

## Replacing the v0 Site on Vercel

If you currently have a v0 site deployed on Vercel and want to replace it:

1. **Go to your Vercel Dashboard**

2. **Find your current project** (the v0 site)

3. **Option A - Redeploy with new code**:
   - Go to Project Settings > Git
   - Disconnect the current repository (if connected)
   - Connect a new GitHub repo with this code
   - Or use Vercel CLI: `vercel --prod` from this project folder

4. **Option B - Create new project and update domain**:
   - Deploy this as a new project
   - Go to old project Settings > Domains
   - Remove the domain from old project
   - Add the domain to new project

## Editing Content

### Language Files

All text content is stored in structured JSON files for easy editing:

- **Dutch**: `locales/nl.json`
- **English**: `locales/en.json`

Simply edit these files to change any text on the website.

### Structure of Language Files

```json
{
  "nav": {
    "about": "Navigation text",
    ...
  },
  "hero": {
    "title": "Hero section text",
    ...
  },
  ...
}
```

## Project Structure

```
frontrunners-website/
├── app/
│   ├── api/
│   │   └── brochure/
│   │       └── route.ts       # Discord webhook API
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   ├── BrochureModal.tsx      # Brochure request form
│   ├── CTASection.tsx         # Call to action section
│   ├── Footer.tsx             # Footer component
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── LanguageProvider.tsx   # i18n context
│   ├── LoginModal.tsx         # Login modal (coming soon)
│   ├── ProgramSection.tsx     # Program & recognition
│   └── WhySection.tsx         # Features section
├── lib/
│   └── i18n.ts                # Internationalization utilities
├── locales/
│   ├── nl.json                # Dutch translations
│   └── en.json                # English translations
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    600: '#1e40af',  // Main brand color
    ...
  }
}
```

### Fonts

The website uses Plus Jakarta Sans. To change:

1. Update the Google Fonts import in `globals.css`
2. Update the font-family in `tailwind.config.js`

## Support

For questions or issues, contact: hello@front-runner.org

---

© 2026 Front Runners. All rights reserved.
