# Sviesa - Photography & Media Club Website

<div align="center">

![Sviesa Logo](public/logo.svg)

**Capturing moments. Creating stories. Immortalizing memories.**

A modern, cinematic website for the Sviesa Photography and Media Club at SLIET

[View Demo](http://localhost:3000) • [Documentation](GETTING_STARTED.md) • [Deployment Guide](DEPLOYMENT.md)

</div>

---

## ✨ Features

- 🎨 **Cinematic Dark Theme** - Premium black background optimized for photography
- 🎭 **Smooth Animations** - Professional transitions with Framer Motion
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **SEO Optimized** - Complete meta tags and semantic HTML
- ♿ **Accessible** - WCAG AAA compliant color contrast
- 🖼️ **Masonry Gallery** - Professional photo showcase layout
- 🔄 **Live Updates** - Hot module replacement for instant changes

---

## 🎨 Design Philosophy

### Color Palette (60-30-10 Ratio)
- **Primary (60%)** - Pure Black (#000000): Dark theme background for premium, cinematic feel
- **Secondary (30%)** - Soft White (#FAFAFA): High readability text and borders
- **Accent (10%)** - Brand Red (#E53935) & Deep Crimson (#B71C1C): Action items and status indicators

### Features
- ✨ Cinematic dark mode design
- 📱 Fully responsive layout
- 🎭 Smooth animations with Framer Motion
- 🖼️ Masonry gallery layout
- 🎯 Modern UI with Tailwind CSS
- ⚡ Fast performance with Vite

## 🚀 Getting Started

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

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
SviesaWebsite/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with live indicator
│   │   ├── Hero.jsx         # Full-screen hero section
│   │   ├── About.jsx        # About, Vision & Mission
│   │   ├── Activities.jsx   # Club activities showcase
│   │   ├── Gallery.jsx      # Masonry photo gallery
│   │   ├── Events.jsx       # Events and projects
│   │   └── Footer.jsx       # Footer with social links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies

```

## 🎨 Customization

### Adding Images
Replace the placeholder icons in the Gallery and Events components with actual images:

1. Add images to the `public/images` folder
2. Update the image sources in the respective components

### Modifying Colors
Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  'brand-red': '#E53935',
  'deep-crimson': '#B71C1C',
  'soft-white': '#FAFAFA',
  'pure-black': '#000000',
}
```

### Content Updates
All content can be edited directly in the component files:
- About & Mission: `src/components/About.jsx`
- Activities: `src/components/Activities.jsx`
- Events: `src/components/Events.jsx`

## 📦 Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool and dev server

## 🌟 Key Sections

1. **Hero Section** - Full-screen introduction with animated logo
2. **About** - Club introduction, vision, and mission
3. **Activities** - Photography, Cinematography, Podcast, Graphic Design, Content Writing
4. **Gallery** - Masonry grid showcasing work
5. **Events** - Organized events, major projects, and upcoming initiatives
6. **Footer** - Contact information and social media links

## 🎯 Design Highlights

- **Aperture Navigation**: Minimalist top navigation with live event indicator
- **Digital Gallery**: Asymmetrical masonry grid with crimson borders on hover
- **Corner Accents**: Geometric decorative elements throughout
- **Smooth Transitions**: All hover effects use 300ms transitions
- **Typography**: Modern sans-serif (Inter) for body, Montserrat for headings

## 📝 License

This project is created for Sviesa Photography & Media Club, SLIET.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Made with ❤️ by the Sviesa team
