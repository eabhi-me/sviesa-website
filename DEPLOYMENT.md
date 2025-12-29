# Deployment Guide - Sviesa Website

## Deployment Options

### 1. Vercel (Recommended - Free & Easy)

Vercel offers the best developer experience with zero configuration.

#### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and deploy

#### CLI Deployment:
```bash
npm install -g vercel
vercel login
vercel
```

---

### 2. Netlify (Free & Popular)

#### Steps:
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done!

#### CLI Deployment:
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```

#### netlify.toml Configuration:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

#### Steps:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/sviesa-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Update vite.config.js:
```javascript
export default defineConfig({
  base: '/sviesa-website/',
  plugins: [react()],
})
```
4. Deploy: `npm run deploy`

---

### 4. Custom Server (VPS/Shared Hosting)

#### Build for Production:
```bash
npm run build
```

#### Upload dist/ folder to your server

#### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache Configuration (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Pre-Deployment Checklist

### ✅ Content
- [ ] Replace all placeholder images with actual photos
- [ ] Update social media links in Footer
- [ ] Verify all text content
- [ ] Test all internal links
- [ ] Add real project images

### ✅ Performance
- [ ] Optimize images (use WebP format)
- [ ] Test on mobile devices
- [ ] Check loading times
- [ ] Verify animations work smoothly

### ✅ SEO
- [ ] Update meta tags in index.html
- [ ] Add Open Graph tags
- [ ] Create favicon
- [ ] Add sitemap.xml
- [ ] Add robots.txt

### ✅ Testing
- [ ] Test all forms
- [ ] Check responsive design
- [ ] Test in different browsers
- [ ] Verify accessibility

---

## Environment Variables

If you need environment variables, create a `.env` file:

```env
VITE_CONTACT_EMAIL=contact@sviesa.club
VITE_INSTAGRAM_URL=https://instagram.com/sviesa
VITE_YOUTUBE_URL=https://youtube.com/@sviesa
```

Access in code:
```javascript
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

---

## Custom Domain Setup

### For Vercel/Netlify:
1. Go to domain settings in dashboard
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### DNS Records Example:
```
Type: A
Name: @
Value: [Your host IP]

Type: CNAME
Name: www
Value: [Your host domain]
```

---

## Analytics Setup (Optional)

### Google Analytics:
Add to index.html before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Performance Optimization

### Image Optimization:
```bash
# Install sharp for image processing
npm install sharp

# Create optimization script
# See scripts/optimize-images.js
```

### Code Splitting:
Already handled by Vite automatically!

### Enable Compression:
Most hosting platforms enable gzip/brotli automatically.

---

## Monitoring

- **Uptime**: Use [UptimeRobot](https://uptimerobot.com) (free)
- **Performance**: Use [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- **Errors**: Consider [Sentry](https://sentry.io) for error tracking

---

## Continuous Deployment

### GitHub Actions (Auto-deploy on push):

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Need Help?

- **Build Issues**: Check the terminal output
- **Deployment Issues**: Check platform logs
- **Performance**: Run `npm run build` and check bundle size

---

Good luck with your deployment! 🚀
