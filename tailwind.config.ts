import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F5F0',       
        card: '#F0EDE8',              
        sage: '#7CA18C',              
        teal: '#5B8583',              
        apricot: '#F2B8A0',          
        charcoal: '#25323D',         
        'charcoal-light': '#4A5568', 
        'sage-10': 'rgba(124,161,140,0.10)', 
        'sage-15': 'rgba(124,161,140,0.15)', 
        white: '#FFFFFF',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        lato: ['var(--font-lato)'],
      },
      animation: {
        'scroll-left': 'scroll-left 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
