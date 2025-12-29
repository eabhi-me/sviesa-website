# Design System - Sviesa Website

## 🎨 Color Palette

### Usage Distribution (60-30-10 Rule)

#### Primary - Pure Black (60%)
- **Hex**: `#000000`
- **RGB**: `rgb(0, 0, 0)`
- **Usage**: Background, main canvas
- **Why**: Creates premium, cinematic feel; makes visual content pop

#### Secondary - Soft White (30%)
- **Hex**: `#FAFAFA`
- **RGB**: `rgb(250, 250, 250)`
- **Usage**: Body text, borders, icons
- **Why**: High readability without harsh contrast

#### Accent - Brand Red (10%)
- **Hex**: `#E53935`
- **RGB**: `rgb(229, 57, 53)`
- **Usage**: CTAs, hover states, active links
- **Why**: Action and attention

#### Accent - Deep Crimson (10%)
- **Hex**: `#B71C1C`
- **RGB**: `rgb(183, 28, 28)`
- **Usage**: Gradients, decorative elements
- **Why**: Status and depth

---

## 🔤 Typography

### Font Families

#### Display Font - Montserrat
- **Usage**: Headings, Logo, Section Titles
- **Weights**: 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)
- **Characteristics**: Geometric, modern, bold presence

#### Body Font - Inter
- **Usage**: Paragraphs, Navigation, Body Text
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Characteristics**: Clean, highly readable, versatile

### Type Scale

```css
/* Headings */
h1: 4rem (64px)   - Hero titles
h2: 3rem (48px)   - Section titles
h3: 2rem (32px)   - Subsections
h4: 1.5rem (24px) - Card titles

/* Body */
p: 1rem (16px)    - Regular text
small: 0.875rem (14px) - Captions
```

### Special Treatments

#### All Caps with Letter Spacing
```css
.subtitle {
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.75rem;
  color: #E53935;
}
```

---

## 📐 Spacing System

### Base Unit: 4px

```
4px   - xs  (0.25rem)
8px   - sm  (0.5rem)
12px  - md  (0.75rem)
16px  - lg  (1rem)
24px  - xl  (1.5rem)
32px  - 2xl (2rem)
48px  - 3xl (3rem)
64px  - 4xl (4rem)
```

### Component Spacing
- **Section Padding**: 80px (5rem) top/bottom
- **Container Max Width**: 1280px (80rem)
- **Grid Gap**: 32px (2rem)
- **Card Padding**: 32px (2rem)

---

## 🎭 Animation Guidelines

### Timing Functions
```css
ease-out: For entrances
ease-in: For exits
ease-in-out: For state changes
```

### Durations
- **Micro**: 150ms - Icon hover
- **Standard**: 300ms - Button/link hover
- **Emphasis**: 600ms - Card transitions
- **Page Load**: 800ms - Section reveals

### Common Animations

#### Hover Scale
```css
transition: transform 300ms ease-out;
hover: scale(1.05);
```

#### Color Transition
```css
transition: color 300ms ease-out;
```

#### Border Expansion
```css
.accent-line {
  width: 0;
  transition: width 500ms ease-out;
}
.accent-line:hover {
  width: 100%;
}
```

---

## 🖼️ Image Guidelines

### Photography Standards

#### Color Treatment
- **Saturation**: Natural to slightly enhanced
- **Contrast**: Medium to high
- **Exposure**: Well-lit subjects
- **Color Grading**: Warm tones preferred

#### Technical Specs
```
Format: WebP (primary), JPG (fallback)
Quality: 85-90%
Max File Size: 500KB per image
Dimensions: 
  - Hero: 1920x1080px
  - Gallery: 1200x800px
  - Thumbnails: 400x300px
```

### Image Overlays
```css
/* Dark overlay for text readability */
.image-overlay {
  background: linear-gradient(
    180deg,
    rgba(0,0,0,0.6) 0%,
    rgba(0,0,0,0.3) 100%
  );
}
```

---

## 🎯 Component Patterns

### Cards

#### Standard Card
```
- Background: Pure Black
- Border: 1px Deep Crimson (20% opacity)
- Padding: 32px
- Border Radius: 8px
- Hover: Border Red (50% opacity)
```

#### Feature Card
```
- Includes accent line (top or left)
- Icon in colored background
- Hover scale effect
- Bottom accent line expansion
```

### Buttons

#### Primary Button
```css
background: #E53935
color: #FAFAFA
padding: 12px 32px
border-radius: 4px
hover-background: #B71C1C
transition: 300ms
```

#### Secondary Button
```css
background: transparent
border: 2px solid rgba(250,250,250,0.2)
color: #FAFAFA
hover-border: #E53935
hover-color: #E53935
```

---

## 🎨 Logo Concepts

### Concept A: The Shutter
A minimalist camera shutter icon where one blade is red while others are white/grey.

### Concept B: The Light Beam
The word "SVIESA" with the "V" styled as a camera lens or spotlight beam casting a crimson shadow.

### Concept C: The Frame (Used in Website)
Corner brackets like a camera viewfinder with bold typography.

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
mobile: < 640px
tablet: 640px - 1024px
desktop: 1024px - 1280px
wide: > 1280px
```

### Grid Adjustments
```
Mobile: 1 column
Tablet: 2 columns
Desktop: 3-4 columns
```

---

## ♿ Accessibility

### Color Contrast
- Text on Black: AAA (>7:1 ratio)
- Red accents: Used for decorative only
- Interactive elements: Clear focus states

### Focus States
```css
focus-visible: {
  outline: 2px solid #E53935;
  outline-offset: 2px;
}
```

### Screen Readers
- Alt text for all images
- Semantic HTML structure
- ARIA labels where needed

---

## 🎬 Motion Philosophy

### "Cinematic" Movement
- Smooth, deliberate animations
- Stagger effects for lists
- Fade + slide combinations
- Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 💡 Best Practices

### Do's ✅
- Use dark theme consistently
- Maintain high contrast
- Keep animations subtle
- Test on real devices
- Optimize images

### Don'ts ❌
- Don't use pure white text
- Don't over-animate
- Don't use small font sizes
- Don't compress images too much
- Don't ignore mobile users

---

## 🎥 Photography Direction

### Event Coverage Style
- Candid moments over posed shots
- Wide and close-up variety
- Golden hour preference
- Dynamic compositions

### Post-Processing
- Consistent color grading
- Subtle vignetting
- Grain for film aesthetic (optional)
- Preserve skin tones

---

This design system ensures consistency across all touchpoints and future expansions of the Sviesa brand.
