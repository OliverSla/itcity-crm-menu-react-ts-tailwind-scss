/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#55AB26',

        base: {
          white: '#ffffff',
          black: '#000000'
        },

        black: {
          DEFAULT: '#1C1C1C',
          50: '#1C1C1C',
          100: '#161616',
          200: '#101010',
          300: '#0A0A0A',
          400: '#060606'
        },

        gray: {
          DEFAULT: '#4A4E5A',
          50: '#F7F8F8',
          100: '#EDEEF1',
          200: '#D8DBDF',
          300: '#B6BAC1',
          400: '#8E95A2',
          500: '#6B7280',
          600: '#5D6B86',
          700: '#4A4E5A',
          800: '#40444C',
          900: '#3D3A42',
          950: '#252730',
          955: '#212328',
          960: '#1D1F22',
          970: '#191919'
        },

        brand: {
          DEFAULT: '#55AB26',
          green: '#55AB26',
          black: '#3C3C3C'
        },

        green: {
          50: '#EEF8E8',
          100: '#E5FBD9',
          400: '#67BE37',
          600: '#489B1A',
          800: '#456533',
          900: '#262E23'
        },

        red: {
          50: '#FFF6F6',
          300: '#FF8989',
          350: '#FF7878',
          400: '#D77373',
          1000: '#FF0000'
        },

        yellow: {
          400: '#FFD84B',
          500: '#FFC700',
          600: '#FAB400'
        },

        gradient: {
          a: '#191A1C',
          b: '#101011'
        }
      },
      transitionDuration: {
        '0.25': '250ms',
        '0.2': '200ms',
        '0.3': '300ms',
        '0.4': '400ms',
        '0.5': '500ms',
        '0.9': '900ms',
        '1.5': '1500ms',
      },
      transitionTimingFunction: {
        'easeOutSine': 'cubic-bezier(0.5, 1, 0.89, 1)',
        'smooth-out': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontWeight: {
        "ultraLight": '200',
        "light": '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        // Link/Secondary
        'link-secondary': ['12px', '22px'],

        // Input/default
        'input-default': ['14px', 'auto'],

        // Button sizes
        'button-s': ['12px', 'auto'],
        'button-m': ['16px', 'auto'],
        'button-l': ['16px', 'auto'],

        // Mobile menu
        'mobile-menu-main': ['24px', 'auto'],
        'mobile-menu-profile': ['14px', 'auto'],
        'mobile-menu-float': ['14px', 'auto'],
        'mobile-menu-title': ['16px', 'auto'],

        // User modal Profile
        'user-modal-profile-name': ['20px', 'auto'],
        'user-modal-profile-company': ['14px', 'auto'],
        'user-modal-profile-icon-small-text': ['12px', 'auto'],
        'user-modal-profile-option-text': ['12px', 'auto'],

        // Desktop menu
        'desktop-menu-top': ['12px', 'auto'],
        'desktop-menu-float': ['12px', 'auto'],
        'desktop-menu-mega-title': ['16px', 'auto'],
        'desktop-menu-mega-list': ['14px', 'auto'],
        'desktop-search-bar': ['20px', 'auto']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
