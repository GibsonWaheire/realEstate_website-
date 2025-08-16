# Deployment Configuration

This project supports multiple deployment targets with automatic base path configuration.

## Environment Variables

The build process automatically detects the deployment environment and sets the appropriate base path:

- **GitHub Pages**: Uses `/realEstate_website-/` as base path
- **Netlify**: Uses `/` as base path  
- **Local Development**: Uses `/` as base path

## Build Commands

### For GitHub Pages
```bash
npm run build:github
# or
DEPLOY_ENV=github-pages npm run build
```

### For Netlify
```bash
npm run build:netlify
# or
DEPLOY_ENV=netlify npm run build
```

### For Local Development
```bash
npm run build
# Uses default configuration (base: '/')
```

## Deployment Commands

### GitHub Pages
```bash
npm run deploy
# Automatically runs build:github then deploys to gh-pages branch
```

### Netlify
```bash
npm run deploy:netlify
# Builds for Netlify (can be used in Netlify build settings)
```

## Automatic Detection

The build system also automatically detects certain environments:

- **GitHub Actions**: Automatically uses GitHub Pages base path
- **Netlify Environment**: Automatically detected via `NETLIFY=true`

## Asset Paths

All assets (favicon, manifest, etc.) use relative paths to ensure compatibility across all deployment targets:

- `./favicon.svg` instead of `/favicon.svg`
- `./site.webmanifest` instead of `/site.webmanifest`

This ensures that icons and PWA features work correctly regardless of the base path configuration.
