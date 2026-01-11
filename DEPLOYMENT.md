# Deployment Guide - GitHub Pages with CI/CD

This guide will walk you through setting up your portfolio website on GitHub Pages with automatic deployment using GitHub Actions.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio project ready to deploy

## Step-by-Step Setup

### 1. Initialize Git (if not already done)

If you haven't initialized git yet:

```bash
cd "/Users/tobybuckmaster/Desktop/Portfolio Website"
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name your repository (e.g., `portfolio-website` or `toby-buckmaster-portfolio`)
4. Make it **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (you already have these)
6. Click **Create repository**

### 3. Connect Your Local Repository to GitHub

Run these commands (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

For example:
```bash
git remote add origin https://github.com/tobybuckmaster/portfolio-website.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select **GitHub Actions** from the dropdown
5. The page will save automatically

### 5. Push Your Code

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your site
- Deploy it to GitHub Pages
- Make it live

After pushing, you can check the deployment status:
1. Go to your repository
2. Click **Actions** tab
3. You'll see the deployment workflow running
4. Once complete (green checkmark), your site is live!

### 6. Access Your Live Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
```
https://tobybuckmaster.github.io/portfolio-website/
```

## Automatic Deployment (CI/CD)

Every time you push changes to the `main` branch:
1. GitHub Actions automatically runs
2. Builds your site
3. Deploys it to GitHub Pages
4. Your site updates automatically (may take 1-2 minutes)

**No manual steps needed!**

## Making Updates

1. Make your changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. The site will automatically redeploy

## Troubleshooting

### Site not showing up?
- Check the **Actions** tab in your GitHub repo to see if deployment failed
- Make sure GitHub Pages source is set to **GitHub Actions** (not "Deploy from a branch")
- Wait 1-2 minutes after pushing - deployment takes time

### Wrong base path?
- The `vite.config.js` automatically sets the base path based on your repository name
- If your repo is named `portfolio`, the base path is `/portfolio/`
- If you want to use a custom domain, you can update `vite.config.js` accordingly

### Want to test locally before deploying?
```bash
npm run build
npm run preview
```

This builds and serves your site locally so you can test before pushing.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update GitHub Pages settings with your custom domain

## Questions?

Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or the Actions logs if something goes wrong.
