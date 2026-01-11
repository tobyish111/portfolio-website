# iOS Developer Portfolio Website

A beautiful, modern portfolio website built with React and Tailwind CSS to showcase iOS applications and mobile development projects.

## Features

- ✨ Modern, responsive design that looks great on all devices
- 📱 Optimized for displaying iOS app projects with screenshots
- 🔗 Direct App Store links for each project
- 🎨 Beautiful animations and hover effects
- 📱 Fully responsive mobile-first design
- ⚡ Fast and lightweight with Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Customization

### Adding Your iOS Projects

Edit `src/data/projects.js` to add your iOS apps:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your App Name",
    description: "A description of your app",
    category: "iOS App",
    appStoreLink: "https://apps.apple.com/app/your-app-id",
    screenshot: "/screenshots/your-app.jpg",
    tags: ["Swift", "SwiftUI", "iOS"],
    releaseDate: "2024",
  },
  // Add more projects...
];
```

### Adding Screenshots

1. Place your app screenshots in the `public/screenshots/` directory
2. Update the `screenshot` path in your project data to match the filename
3. Recommended dimensions: 400x800px (iPhone portrait) or higher resolution

### Updating Personal Information

1. **About Section**: Edit `src/components/About.jsx` to update your bio and skills
2. **Contact Links**: Edit `src/components/Contact.jsx` to update your social media and email links
3. **Hero Section**: Edit `src/components/Hero.jsx` to customize the hero text

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.js`
- Custom styles in `src/index.css`

## Project Structure

```
├── public/
│   └── screenshots/     # Place your app screenshots here
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── AppCard.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js  # Project data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Or connect your Git repository on vercel.com

### GitHub Pages (Recommended - Free with CI/CD)

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

#### Setup Steps:

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main` branch

3. **Your site will be live at**:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

#### How It Works:

- The `.github/workflows/deploy.yml` file automatically:
  - Builds your site when you push to `main`
  - Deploys it to GitHub Pages
  - Updates the site automatically on every push

**Note**: The base path in `vite.config.js` is automatically configured based on your repository name. If your repo is named `portfolio-website`, your site will be at `https://username.github.io/portfolio-website/`

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## License

MIT License - feel free to use this portfolio template for your own projects!
