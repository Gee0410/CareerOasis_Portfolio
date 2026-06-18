# 🌿 CareerOasis Portfolio

Welcome to the official frontend showcase repository for **CareerOasis**, an end-to-end intelligent career platform designed to bridge the gap between academia and real-world tech careers.

This repository contains the high-fidelity, production-ready SaaS landing page for the CareerOasis ecosystem.

🔗 **Live Deployment**  
👉 https://gee0410.github.io/CareerOasis_Portfolio/

---

## 🎨 Design Philosophy & UI/UX Aesthetic

The frontend is crafted with a premium SaaS design language inspired by modern product studios (e.g. Lovable.dev-style interfaces).

### ✦ Core Design Principles

- **Visual Breathing Space**  
  A structured *Light → Dark → Light* scrolling rhythm reduces cognitive load and improves readability across dense content sections.

- **Oasis Color System**  
  Built on a warm base canvas `#FDFBF7 (Oasis Cream)` paired with a mint-green accent system to guide user attention and conversion focus.

- **Component Discipline**  
  Strict usage of consistent design tokens:
  - Border radius system: `rounded-2xl` → `rounded-[2.5rem]`
  - Atomic layout structure for predictable UI scaling
  - Modular card-based hierarchy

---

## ⚡ Technical Architecture

The project is built using a modern frontend stack optimized for performance, scalability, and developer experience.

### ✦ Core Stack

- **Framework**: React (Single Page Application)
- **Build Tool**: Vite (HMR + optimized bundling)
- **Styling**: Tailwind CSS (utility-first design system)
- **Animation Engine**: Framer Motion (scroll + transition animations)
- **Icon System**: `lucide-react` + `react-icons`

---

## 🧱 Project Structure

```text
careeroasis-portfolio/
├── .github/workflows/
│   └── deploy.yml          # Automated CI/CD GitHub Actions deployment script
├── public/
│   └── logo.png            # Official system logo asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky blur backdrop header with integrated logo tracking
│   │   ├── TechStack.jsx   # 2x2 Dark-mode geek technical pillars grid
│   │   ├── Reflection.jsx  # Glassmorphic reflection card with GitHub repository link
│   │   └── Cta.jsx         # Smooth-capsule high-conversion connect section
│   ├── utils/
│   │   └── animations.js   # Framer Motion configuration presets
│   ├── App.jsx             # Main view assembly orchestrator
│   └── main.jsx            # DOM mounting and root hydration setup
├── vite.config.js          # Main build config and base path routing parameters
└── package.json            # Lockstep package configurations

```
---

## 🔄 CI/CD Deployment Pipeline

This project uses **GitHub Actions** for automated deployment to GitHub Pages.

### ✦ Deployment Flow

On every push to the `main` branch:

1. Provision Node.js 20 environment
2. Install project dependencies (`npm install`)
3. Build production assets using Vite (`npm run build`)
4. Deploy `/dist` output to the `gh-pages` branch
5. GitHub Pages automatically serves the latest version

---

## 🏆 System Integration

While this repository focuses on the **frontend portfolio layer**, CareerOasis is part of a larger full-stack ecosystem.

### ✦ Backend Ecosystem (Integrated System)

- **Backend Framework**: Python FastAPI
- **Database Layer**: PostgreSQL
- **AI Pipeline**: Google Gemini API integration
- **Core Features**:
  - Resume parsing & normalization
  - Skill extraction & classification
  - Career path recommendation engine
  - Skill gap analysis system

---

## 🎓 Academic Context

This project was developed as a **Final Year Project** at:

**Universiti Utara Malaysia (UUM)**

---

## 🚀 Key Highlights

- Modern SaaS-grade UI/UX design system
- Fully responsive React + Tailwind architecture
- Smooth animated interactions via Framer Motion
- Automated CI/CD deployment pipeline
- Production-ready static hosting via GitHub Pages

---

## 📌 License

This project is intended for academic and portfolio demonstration purposes.