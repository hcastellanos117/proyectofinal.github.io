/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal basada en el logo de Luan Candles
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#e879a7', // Color principal del logo
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843'
        },
        // Tonos neutros cálidos para complementar
        cream: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#faf0e1',
          300: '#f6e8d2',
          400: '#f0d8b4',
          500: '#eac896',
          600: '#d3b587',
          700: '#b09771',
          800: '#8d795b',
          900: '#73634a'
        },
        // Tonos rosados suaves del logo
        rose: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#e879a7',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843'
        },
        // Tonos tierra para contraste
        earth: {
          50: '#f9f7f4',
          100: '#f3efe9',
          200: '#e1d7c8',
          300: '#cfbfa7',
          400: '#ab8f65',
          500: '#875f23',
          600: '#7a5620',
          700: '#66471b',
          800: '#523916',
          900: '#432f12'
        },
        // Verde esmeralda suave como color secundario
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        },
        // Colores para velas específicos
        candle: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#fbd9a5',
          300: '#f8c06d',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}