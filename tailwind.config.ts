import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', borderRadius: '500px' },  
          '20%': { borderRadius: '400px' },
          '30%': { borderRadius: '300px' },
          '40%': { borderRadius: '200px' },
          '50%': { borderRadius: '100px' },
          '60%': { borderRadius: '50px' },
          '70%': { borderRadius: '40px' },
          '80%': { borderRadius: '20px' },
          '100%': { transform: 'translateX(0)', borderRadius: '0px'  },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', borderRadius: '0px' },
          '20%': { borderRadius: '20px' },
          '30%': { borderRadius: '40px' },
          '40%': { borderRadius: '50px' },
          '50%': { borderRadius: '100px' },
          '60%': { borderRadius: '200px' },
          '70%': { borderRadius: '300px' },
          '80%': { borderRadius: '400px' },
          '100%': { transform: 'translateX(-100%)', borderRadius: '500px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.7s ease-in-out forwards',
        'slide-out': 'slideOut 0.9s ease-in-out forwards',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
