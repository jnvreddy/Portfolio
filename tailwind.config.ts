  import type { Config } from "tailwindcss";

  const config: Config = {
    darkMode: "class", 
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          marquee: 'marquee 40s linear infinite',
        },
      },
    },
    plugins: [],
  };

  export default config;
