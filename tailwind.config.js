/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'midnight': '#121212',
        'ivory': '#FAF8F4',
        'gold': '#C7A46C',
        'dark-charcoal': '#2A2A2A',
        'soft-bg': '#F3EFE8',
        'forest': '#5F7058',
        
        // Gradients
        'gradient-start': '#C7A46C',
        'gradient-end': '#A8884C',
        
        // UI States
        'gold-light': '#D4B88C',
        'gold-dark': '#B8925A',
        'ivory-dark': '#ECE6D8',
        'text-primary': '#2A2A2A',
        'text-secondary': '#5A5A5A',
        'text-light': '#8A8A8A',
        
        // Status Colors
        'success': '#5F7058',
        'error': '#C0392B',
        'warning': '#F39C12',
        'info': '#3498DB',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['32px', { lineHeight: '1.3' }],
        'paragraph': ['18px', { lineHeight: '1.6' }],
        'button': ['16px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'small': ['14px', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
        'section-lg': '160px',
      },
      borderRadius: {
        'xl': '24px',
        'lg': '16px',
        'button': '16px',
        'card': '24px',
        'image': '24px',
      },
      maxWidth: {
        'container': '1400px',
        'container-sm': '1200px',
        'container-lg': '1600px',
      },
      boxShadow: {
        'soft': '0 20px 60px -15px rgba(0, 0, 0, 0.08)',
        'medium': '0 30px 80px -20px rgba(0, 0, 0, 0.12)',
        'large': '0 40px 100px -25px rgba(0, 0, 0, 0.16)',
        'glow': '0 0 30px rgba(199, 164, 108, 0.15)',
        'card': '0 20px 60px -15px rgba(0, 0, 0, 0.08)',
        'hover': '0 30px 80px -20px rgba(0, 0, 0, 0.15)',
        'button': '0 10px 30px -10px rgba(199, 164, 108, 0.3)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C7A46C 0%, #A8884C 100%)',
        'gradient-dark': 'linear-gradient(135deg, #121212 0%, #1A1A1A 100%)',
        'gradient-ivory': 'linear-gradient(135deg, #FAF8F4 0%, #F3EFE8 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(18, 18, 18, 0.7) 0%, rgba(18, 18, 18, 0.3) 100%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeInDown: 'fadeInDown 0.8s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        scaleIn: 'scaleIn 0.8s ease-out',
        zoomIn: 'zoomIn 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        rotate: 'rotate 10s linear infinite',
        bounce: 'bounce 1s infinite',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      zIndex: {
        'negative': '-1',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
        'modal': '1000',
        'popover': '2000',
        'tooltip': '3000',
        'notification': '4000',
        'max': '9999',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      backdropOpacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'html': {
          scrollBehavior: 'smooth',
          fontSize: '16px',
        },
        'body': {
          fontFamily: theme('fontFamily.body'),
          color: theme('colors.dark-charcoal'),
          backgroundColor: theme('colors.ivory'),
          lineHeight: '1.6',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme('fontFamily.heading'),
          fontWeight: '400',
          letterSpacing: '-0.01em',
        },
        '::selection': {
          backgroundColor: theme('colors.gold'),
          color: theme('colors.ivory'),
        },
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.soft-bg'),
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.gold'),
          borderRadius: '8px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme('colors.gold-dark'),
        },
        'img': {
          maxWidth: '100%',
          height: 'auto',
        },
        'a': {
          color: 'inherit',
          textDecoration: 'none',
        },
        'button': {
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
          fontFamily: 'inherit',
        },
        'input, textarea, select': {
          fontFamily: 'inherit',
          outline: 'none',
        }
      })
    }
  ],
}
