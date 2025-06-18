# Vertex Portfolio

A modern, responsive portfolio website for Frontend Developer "Vertex" built with cutting-edge technologies and smooth animations.

## 🚀 Features

- **Modern Design**: Clean and eye-catching design with light grey and black color scheme
- **Smooth Animations**: GSAP ScrollTrigger animations and Framer Motion for enhanced user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Type Safe**: Written in TypeScript for better code quality
- **Accessible**: Follows accessibility best practices

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: GSAP with ScrollTrigger, Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # Shadcn/UI components
│   ├── sections/    # Portfolio sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── Navigation.tsx
└── lib/
    └── utils.ts
```

## 🎨 Sections

1. **Hero/Intro**: Eye-catching landing with animated name and title
2. **About Me**: Personal introduction and background
3. **Skills/Technologies**: Tech stack and expertise showcase
4. **Projects**: Portfolio project showcase with hover effects
5. **Experience/Timeline**: Professional experience timeline
6. **Contact**: Social links (Instagram and GitHub)

## 🎭 Animations

- Smooth scroll-triggered animations using GSAP ScrollTrigger
- Parallax effects on section backgrounds
- Fade-in and slide-up animations for content reveal
- Hover effects on interactive elements
- Floating animations for visual elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The portfolio uses a blue and purple gradient theme. You can customize colors in:
- Tailwind CSS classes throughout components
- CSS variables in `globals.css`

### Content
Update personal information in:
- `src/components/sections/Hero.tsx` - Name and title
- `src/components/sections/About.tsx` - Personal description
- `src/components/sections/Skills.tsx` - Technical skills
- `src/components/sections/Projects.tsx` - Portfolio projects
- `src/components/sections/Experience.tsx` - Work experience
- `src/components/sections/Contact.tsx` - Contact information

### Animations
Customize animations in each section component by modifying:
- GSAP timeline configurations
- ScrollTrigger settings
- Animation durations and easing functions

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Performance

- Static site generation for optimal loading
- Image optimization with Next.js Image component
- CSS-in-JS with zero runtime overhead
- Tree-shaking for minimal bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js, GSAP, and Tailwind CSS.
