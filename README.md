# 🌟 Arijit Samal's Personal Portfolio

<div align="center">

### A Modern, Responsive Portfolio Showcasing My skills, experience, and projects

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-2ea44f?style=for-the-badge)](https://1-arijits.github.io/portfolio/)
[![GitHub](https://img.shields.io/github/stars/1-ARIjitS/portfolio?style=for-the-badge&logo=github)](https://github.com/1-ARIjitS/portfolio)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📖 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Customization](#️-customization)
- [📱 Responsive Design](#-responsive-design)
- [📞 Connect with Me](#-connect-with-me)
- [📜 License](#-license)

## 🎯 Overview

Welcome to my personal portfolio repository! This is a modern, fully responsive single-page application designed to showcase my journey and expertise in **Data Science**, **Artificial Intelligence**, and **Machine Learning**. Built with vanilla technologies for optimal performance and clean code architecture.

### 🎨 Design Philosophy
- **Minimalist & Clean**: Focus on content with distraction-free design
- **Performance First**: Lightweight, fast-loading, and optimized
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Mobile-First**: Designed primarily for mobile, enhanced for desktop

## ✨ Features

### 🎨 **Visual & UX Design**
- 🌙 **Dual Theme Support**: Elegant light/dark mode with persistent user preference
- 📱 **Fully Responsive**: Pixel-perfect design across all devices (320px - 2560px+)
- ⚡ **Performance Optimized**: < 2s load time with optimized assets
- ♿ **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation

### 🎭 **Interactive Elements**
- ⌨️ **Dynamic Typing Animation**: Engaging hero section with Typed.js
- 🎬 **Smooth Scroll Animations**: Content reveals powered by ScrollReveal
- 🃏 **Expandable Cards**: Interactive publication and project details
- 🎯 **Hover Effects**: Subtle micro-interactions throughout

### 📋 **Content Sections**
- 🏠 **Hero Section**: Eye-catching introduction with social links & CTA
- 👨‍💻 **About**: Professional summary with animated skill tags
- 🎓 **Education**: Academic journey with university logos
- 💼 **Experience**: Professional timeline with detailed descriptions
- 📄 **Publications**: Research showcase with expandable abstracts
- 🚀 **Projects**: Portfolio of key work with live demos & code links
- 📬 **Contact**: Functional form with EmailJS integration

### 🔧 **Technical Features**
- 📧 **Contact Form**: Direct email sending without backend
- 📄 **CV Download**: Strategic placement for easy recruiter access
- 🔄 **Theme Persistence**: LocalStorage for user preferences
- 🖱️ **Smooth Navigation**: Scroll-spy active link highlighting

## 🛠️ Tech Stack

Built with modern web technologies focusing on **performance**, **maintainability**, and **user experience**.

### 🏗️ **Core Technologies**
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### 📚 **Libraries & Tools**
![TypedJS](https://img.shields.io/badge/Typed.js-Animation-00D4AA?style=for-the-badge)
![ScrollReveal](https://img.shields.io/badge/ScrollReveal-Animations-FF6B6B?style=for-the-badge)
![EmailJS](https://img.shields.io/badge/EmailJS-Contact_Form-4285F4?style=for-the-badge)

### 🎨 **Design & Icons**
![Unicons](https://img.shields.io/badge/Unicons-Icon_Set-9B59B6?style=for-the-badge)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-Typography-4285F4?style=for-the-badge)

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup structure | Latest |
| **CSS3** | Styling with custom properties & animations | Latest |
| **Vanilla JS** | Interactive functionality (ES6+) | Latest |
| **Typed.js** | Hero section typing animation | 2.0.16 |
| **ScrollReveal** | Scroll-triggered animations | Latest |
| **EmailJS** | Client-side email service | Latest |
| **Unicons** | Consistent icon library | v4.0.8 |

## 📂 Project Structure

The repository is organized with a clear and intuitive file structure:

```
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet with all custom CSS
│   ├── images/               # All images, logos, and favicons
│   ├── js/
│   │   └── main.js           # Core JavaScript for animations, theme toggle, etc.
│   └── resume/
│       └── ARIJIT_RESUME.pdf # My resume file
├── index.html                # The main HTML file for the single-page application
└── README.md                 # This file
```

## 🚀 Getting Started

### 📋 **Prerequisites**
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (for cloning)

### 🔧 **Quick Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/1-ARIjitS/portfolio.git
   cd portfolio
   ```

2. **Launch the project**
   
   **Option A: Live Server (Recommended)**
   ```bash
   # If you have VS Code with Live Server extension
   code .
   # Then right-click index.html → "Open with Live Server"
   ```
   
   **Option B: Python Server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option C: Node.js Server**
   ```bash
   npx serve .
   ```
   
   **Option D: Direct File Access**
   - Simply double-click `index.html`
   - ⚠️ Note: Some features may not work due to CORS restrictions

3. **Open in browser**
   - Navigate to `http://localhost:8000` (or the port shown)
   - 🎉 Enjoy exploring the portfolio!

## ⚙️ Customization

This portfolio is designed to be easily customizable and can be adapted for your own use.

### 🎨 **Design Customization**

**Color Scheme**
```css
/* Edit CSS variables in assets/css/style.css */
:root {
    --primary-color: #0284c7;        /* Your brand color */
    --accent-color: #16a34a;         /* Accent color */
    --text-color-primary: #1f2937;   /* Main text */
    /* ... more variables */
}
```

**Typography**
```css
/* Change fonts in the CSS imports section */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');
```

### 📝 **Content Updates**

| File | What to Update |
|------|----------------|
| `index.html` | Personal info, bio, projects, experience |
| `assets/resume/` | Replace with your CV/resume PDF |
| `assets/images/` | Profile photo and project screenshots |
| `assets/js/main.js` | Social links, EmailJS credentials |

### 🔧 **Advanced Configuration**

**EmailJS Setup**
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Update credentials in `main.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
   ```

**Social Links**
```javascript
// Update in assets/js/main.js
const socialLinks = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    // ... add your links
};
```

## 📱 Responsive Design

| Device | Breakpoint | Layout |
|--------|------------|--------|
| 📱 Mobile | 320px - 767px | Single column, stacked |
| 📱 Tablet | 768px - 1023px | Two column hybrid |
| 💻 Laptop | 1024px - 1439px | Multi-column grid |
| 🖥️ Desktop | 1440px+ | Full layout with margins |

## 📞 Connect with Me

<div align="center">

**Let's build something amazing together!**

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit_Website-2ea44f?style=for-the-badge)](https://1-arijits.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arijit-samal1/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1-ARIjitS)
[![Devpost](https://img.shields.io/badge/Devpost-003E54?style=for-the-badge&logo=devpost&logoColor=white)](https://devpost.com/arijits19)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:arijit.samal@student-cs.fr)

---

⭐ **Star this repo if it helped you!**

</div>

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Arijit Samal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

**Made with ❤️ by [Arijit Samal](https://github.com/1-ARIjitS)**

*Building the future with AI*

</div>
