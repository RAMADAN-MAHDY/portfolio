import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
        transitionDuration: {
        '500':'500ms'
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out'
    },
      keyframes: {




        
        orbit: {
            '0%': { transform: 'rotate(0deg) translateX(30px)' },
            '25%': { transform: 'rotate(90deg) translateX(30px)' },
            '50%': { transform: 'rotate(180deg) translateX(30px)' },
            '75%': { transform: 'rotate(270deg) translateX(30px)' },
            '100%': { transform: 'rotate(360deg) translateX(30px)' },
          }
        ,
        slideIn: {
          '0%': { transform: 'translateX(-100%)', borderRadius: '500px' },  
          '10%': { borderRadius: '0px 0px 500px 0px' },
          '15%': { borderRadius: '0px 0px 480px 0px' },
          '20%': { borderRadius: '0px 0px 450px 0px' },
          '25%': { borderRadius: '0px 0px 400px 0px' },
          '30%': { borderRadius: '0px 0px 350px 0px' },
          '35%': { borderRadius: '0px 0px 300px 0px' },
          '40%': { borderRadius: '0px 0px 250px 0px' },
          '45%': { borderRadius: '0px 0px 200px 0px' },
          '50%': { borderRadius: '0px 0px 100px 0px' },
          '55%': { borderRadius: '0px 0px 110px 0px' },
          '60%': { borderRadius: '0px 0px 90px 0px' },
          '65%': { borderRadius: '0px 0px 80px 0px' },
          '70%': { borderRadius: '0px 0px 70px 0px' },
          '80%': { borderRadius: '0px 0px 60px 0px' },
          '85%': { borderRadius: '0px 0px 50px 0px' },
          '90%': { borderRadius: '0px 0px 40px 0px' },
          '95%': { borderRadius: '0px 0px 30px 0px' },
          '100%': { transform: 'translateX(0)', borderRadius: '0px 0px 20px 0px'    },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', borderRadius: '0px 0px 20px 0px' },
          '10%': { borderRadius: '0px 0px 30px 0px' },
          '20%': { borderRadius: '0px 0px 40px 0px' },
          '25%': { borderRadius: '0px 0px 50px 0px' },
          '30%': { borderRadius: '0px 0px 60px 0px' },
          '35%': { borderRadius: '0px 0px 70px 0px' },
          '40%': { borderRadius: '0px 0px 80px 0px' },
          '45%': { borderRadius: '0px 0px 95px 0px' },
          '50%': { borderRadius: '0px 0px 100px 0px' },
          '55%': { borderRadius: '0px 0px 110px 0px' },
          '60%': { borderRadius: '0px 0px 120px 0px' },
          '65%': { borderRadius: '0px 0px 130px 0px' },
          '70%': { borderRadius: '0px 0px 140px 0px' },
          '75%': { borderRadius: '0px 0px 150px 0px' },
          '80%': { borderRadius: '0px 0px 160px 0px' },
          '85%': { borderRadius: '0px 0px 170px 0px' },
          '100%': { transform: 'translateX(-100%)', borderRadius: '500px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-12px)' },
          '40%': { transform: 'translateY(-18px)' },
          '60%': { transform: 'translateY(-12px)' },
          '80%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg) scale(1.15)' },
          '20%': { transform: 'rotate(8deg) scale(1.18)' },
          '40%': { transform: 'rotate(-6deg) scale(1.13)' },
          '60%': { transform: 'rotate(6deg) scale(1.16)' },
          '80%': { transform: 'rotate(-4deg) scale(1.12)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-60px) scale(0.95)' },
          '60%': { opacity: '0.7', transform: 'translateY(10px) scale(1.03)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.95)' },
          '60%': { opacity: '0.7', transform: 'translateY(-10px) scale(1.03)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-20deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '80%': { transform: 'rotate(20deg)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.7s ease-in-out forwards',
        'slide-out': 'slideOut 0.9s ease-in-out forwards',
        'spin-custom': 'orbit 1.5s linear infinite',
        'bounceSmooth': 'bounceSmooth 1.8s cubic-bezier(.68,-0.55,.27,1.55) infinite',
        'wiggle': 'wiggle 1.1s cubic-bezier(.36,.07,.19,.97) infinite',
        'slide-down': 'slideDown 1.1s cubic-bezier(.36,.07,.19,.97) both',
        'slide-up': 'slideUp 1.1s cubic-bezier(.36,.07,.19,.97) both',
        'wave': 'wave 1.2s ease-in-out infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
        addUtilities({
            '.preserve-3d': {
                'transform-style': 'preserve-3d',
            },
            '.rotate-y-100': {
                'transform': 'rotateY(-100deg)',
              },
              '.rotate-y-101': {
                'transform': 'rotateY(-99deg)',
              },
              '.rotate-y-102': {
                'transform': 'rotateY(-98deg)',
              },
        });
    }),
],
};

export default config;
