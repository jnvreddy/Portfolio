# 🚀 Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, an interactive contact form, and a clean, professional design.

## ✨ Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Tailwind CSS 4
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Modern dark mode design with glassmorphism effects
- **Contact Form**: Integrated contact form using Web3Forms API
- **Error Handling**: Comprehensive error boundaries and validation
- **Accessibility**: ARIA-compliant components for better accessibility
- **Code Splitting**: Lazy loading for optimal performance
- **SEO Optimized**: Comprehensive SEO with structured data, sitemap, robots.txt, and social media integration

## 🔍 SEO Features

This portfolio is optimized for search engines with a focus on **Kotlin**, **Kotlin Multiplatform**, and **Cross-platform Mobile Development**:

- **robots.txt**: Search engine crawling configuration
- **sitemap.xml**: Complete site structure with prioritized social profiles (GitHub, LinkedIn)
- **Structured Data (JSON-LD)**: Schema.org Person markup for rich search results
- **Meta Tags**: Comprehensive meta tags including Open Graph and Twitter Cards
- **Canonical URLs**: Proper URL canonicalization
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Social Links Priority**: GitHub and LinkedIn profiles highlighted for maximum visibility

The SEO strategy emphasizes expertise in:
- Kotlin and Kotlin Multiplatform development
- Android native app development
- Cross-platform mobile solutions
- Jetpack Compose and modern Android architecture

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Routing**: React Router DOM v7
- **Build Tool**: Vite
- **Linting**: ESLint 9
- **Form Handling**: Web3Forms

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jnvreddy/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Web3Forms access key to `.env`:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
   
   Get your free access key at [web3forms.com](https://web3forms.com)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
   ```typescript
   export default defineConfig({
     base: '/Portfolio/',
     // ... rest of config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy the dist folder to gh-pages branch
   ```

## 📁 Project Structure

```
Portfolio/
├── public/           # Static assets
│   ├── robots.txt   # SEO: Search engine crawling rules
│   ├── sitemap.xml  # SEO: Site structure and URLs
│   └── T-icons/     # Technology icons
├── src/
│   ├── assets/      # Images, icons, etc.
│   ├── components/  # React components
│   │   ├── layouts/ # Layout components
│   │   └── ui/      # Reusable UI components
│   ├── constants/   # Static data and constants
│   ├── contexts/    # React contexts
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page components
│   ├── types/       # TypeScript types
│   ├── utils/       # Utility functions
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # App entry point
│   └── index.css    # Global styles
├── .env.example     # Example environment variables
├── index.html       # HTML template with SEO meta tags
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information

Edit the data in `src/constants/data.ts` to update:
- Personal information
- Skills and technologies
- Projects
- Social links

### Modify Styles

The project uses Tailwind CSS. Customize the design by:
- Editing `tailwind.config.ts` for theme customization
- Modifying component styles in their respective files
- Updating global styles in `src/index.css`

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add it to the Home page in `src/pages/Home.tsx`
3. Update routing if needed in `src/App.tsx`

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact form | Yes |

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Jnv Reddy**
- GitHub: [@jnvreddy](https://github.com/jnvreddy)
- Twitter: [@jnv_reddy](https://twitter.com/jnv_reddy)

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Web3Forms](https://web3forms.com/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ Star this repo if you find it helpful!
