<div align="center">
  
# 🌟 Aditya Kumar - Personal Portfolio

### A modern, agency-grade personal website blending portfolio and personal brand storytelling with a cinematic and interactive experience.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.2.12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Live Demo](#) • [Report Bug](https://github.com/Aditya1156/MyWebsite/issues) • [Request Feature](https://github.com/Aditya1156/MyWebsite/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Components](#-components)
- [🛠️ Configuration](#️-configuration)
- [📱 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📧 Contact](#-contact)

---

## ✨ Features

🎬 **Cinematic Experience**
- Smooth scroll animations powered by GSAP and Lenis
- Interactive cursor trail and hover effects
- Animated sections with Framer Motion

🎨 **Modern UI/UX**
- Responsive design for all screen sizes
- Beautiful glass-morphism effects
- Custom animated components (BlurText, AnimatedName, AnimatedLogo)
- Dock-style navigation
- 3D dome gallery for showcasing memories

💼 **Portfolio Sections**
- Hero section with animated introduction
- About me with personal storytelling
- Skills showcase with interactive elements
- Project gallery with detailed case studies
- Professional experience timeline
- Contact form with social media integration

🚀 **Performance Optimized**
- Built with Vite for lightning-fast builds
- Lazy loading and code splitting
- Optimized animations for 60fps
- SEO-friendly structure

📱 **Interactive Features**
- Share buttons for social media
- VCard download functionality
- Scroll indicators and "Go to top" button
- Active section tracking
- Gesture-based interactions

---

## 🎯 Tech Stack

### **Frontend Framework**
- **React 19.2.0** - Latest React with improved performance
- **TypeScript 5.8.2** - Type-safe code

### **Animation & Interactions**
- **Framer Motion 11.2.12** - Smooth, production-ready animations
- **GSAP 3.13.0** - Professional-grade animations
- **Lenis 1.1.6** - Smooth scrolling library
- **@use-gesture/react 10.3.1** - Gesture recognition

### **Build Tool**
- **Vite 6.2.0** - Next generation frontend tooling

### **Styling**
- CSS Modules
- Custom CSS with modern features

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya1156/MyWebsite.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd MyWebsite
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 📁 Project Structure

```
MyWebsite/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── About.tsx        # About section
│   ├── AnimatedLogo.tsx # Animated logo component
│   ├── AnimatedName.tsx # Animated name component
│   ├── Contact.tsx      # Contact section
│   ├── CursorTrail.tsx  # Custom cursor effect
│   ├── Dock.tsx         # Dock-style navigation
│   ├── DomeGallery.tsx  # 3D dome gallery
│   ├── Experience.tsx   # Experience timeline
│   ├── Footer.tsx       # Footer component
│   ├── Gallery.tsx      # Image gallery
│   ├── Header.tsx       # Header/navigation
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   └── ...
├── hooks/               # Custom React hooks
│   ├── useActiveSection.tsx
│   └── useOnScreen.tsx
├── lib/                 # Utility functions
│   └── utils.ts
├── App.tsx              # Main app component
├── constants.ts         # App constants
├── types.ts             # TypeScript types
├── index.tsx            # App entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

---

## 🎨 Components

### **Core Components**

| Component | Description |
|-----------|-------------|
| `Hero` | Landing section with animated introduction |
| `About` | Personal information and storytelling |
| `Skills` | Interactive skills showcase |
| `Projects` | Portfolio projects with case studies |
| `Experience` | Professional experience timeline |
| `Contact` | Contact form with social links |
| `Gallery` | Image gallery with filters |
| `DomeGallery` | 3D dome-style photo gallery |

### **UI Components**

| Component | Description |
|-----------|-------------|
| `AnimatedLogo` | Logo with enter animation |
| `AnimatedName` | Name with typing effect |
| `BlurText` | Text with blur reveal animation |
| `CursorTrail` | Custom cursor with trail effect |
| `Dock` | MacOS-style dock navigation |
| `ScrollIndicator` | Visual scroll progress |
| `GoToTopButton` | Smooth scroll to top |

### **Custom Hooks**

- `useActiveSection` - Track currently visible section
- `useOnScreen` - Detect when elements enter viewport

---

## 🛠️ Configuration

### Vite Configuration

The project uses Vite with React plugin. Configuration can be found in `vite.config.ts`.

### TypeScript Configuration

TypeScript settings are in `tsconfig.json` with strict type checking enabled.

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
VITE_API_URL=your_api_url_here
```

---

## 📱 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Aditya1156/MyWebsite)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Aditya1156/MyWebsite)

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production-ready files

3. Upload the `dist` folder to your hosting service

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Aditya Kumar**

- GitHub: [@Aditya1156](https://github.com/Aditya1156)
- Website: [Your Website URL]
- Email: your.email@example.com

---

<div align="center">

### ⭐ Star this repo if you like it!

Made with ❤️ by Aditya Kumar

</div>
