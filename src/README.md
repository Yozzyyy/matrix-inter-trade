# Matrix Inter Trade Sdn Bhd — Website

A 3-page company website built with React.js + Tailwind CSS.

## Pages
- **Home** — Hero, stats, highlights, CTA
- **Services** — 6 service cards + how-it-works process steps
- **About Us** — Company story, values, contact details, team

## Project Structure
```
src/
  App.jsx               ← Main app with simple page routing
  components/
    Navbar.jsx          ← Fixed top nav with mobile menu
    Footer.jsx          ← Footer with links and contact info
  pages/
    Home.jsx
    Services.jsx
    AboutUs.jsx
```

## Setup

### 1. Create Vite + React project
```bash
npm create vite@latest matrix-inter-trade -- --template react
cd matrix-inter-trade
```

### 2. Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Replace files
Copy all the provided files into your project, matching the structure above.

### 4. Update `src/index.css`
Replace its contents with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Run
```bash
npm run dev
```

## Things to add yourself
- Replace image placeholder boxes with `<img>` tags pointing to your photos
- Replace team member placeholders with real names, titles, and photos
- Embed a Google Maps iframe in the About page (replace the map placeholder div)
- Add your email address to the contact section
- Add a favicon using your logo

## Color Theme
- **Primary accent**: Amber (`amber-500` — #F59E0B)
- **Background**: Slate 950/900
- **Text**: White / Slate 400

To change the accent color, find and replace `amber-500` / `amber-400` throughout the files.
