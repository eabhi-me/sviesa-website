# 🚀 Quick Reference Card - Sviesa Website

## Essential Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/      # All React components
├── App.jsx         # Main app component
├── main.jsx        # Entry point
└── index.css       # Global styles

public/
├── images/         # Your photos go here
└── logo.svg        # Site logo
```

## Color Codes

```css
Pure Black:    #000000  /* Background (60%) */
Soft White:    #FAFAFA  /* Text (30%) */
Brand Red:     #E53935  /* Actions (10%) */
Deep Crimson:  #B71C1C  /* Accents (10%) */
```

## Key Files to Edit

| File | Purpose |
|------|---------|
| `src/components/About.jsx` | About/Vision/Mission |
| `src/components/Activities.jsx` | Activities & stats |
| `src/components/Events.jsx` | Events & projects |
| `src/components/Contact.jsx` | Contact form |
| `src/components/Footer.jsx` | Social links |
| `src/components/Gallery.jsx` | Photo gallery |
| `tailwind.config.js` | Colors & theme |

## Adding Images

1. Place in `public/images/`
2. Reference in components:
   ```jsx
   <img src="/images/gallery/photo1.jpg" alt="Description" />
   ```

## Common Tasks

### Change Text
Open relevant component → Edit the content

### Update Colors
Edit `tailwind.config.js` → colors section

### Add Social Links
Edit `src/components/Footer.jsx` → Update URLs

### Modify Stats
Edit `src/components/Activities.jsx` → Line ~125

## Deployment (Vercel)

1. Push to GitHub
2. Go to vercel.com
3. Import project
4. Deploy ✓

## Support

- 📚 [Full Docs](GETTING_STARTED.md)
- 🚀 [Deploy Guide](DEPLOYMENT.md)
- 🎨 [Design System](DESIGN_SYSTEM.md)
- ✅ [Launch Checklist](LAUNCH_CHECKLIST.md)

## Current Status

✅ Development server: Running
✅ Components: Complete (10)
✅ Sections: All done (8)
✅ Responsive: Yes
✅ Animations: Working
⏳ Images: Add yours
⏳ Deploy: Ready when you are

---

**Website**: http://localhost:3000
**Version**: 1.0.0
**Built**: React + Tailwind + Vite
**Status**: Production Ready 🎉
