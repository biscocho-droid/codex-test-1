/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#05060f',
          900: '#0b1020',
          800: '#121a35'
        }
      },
      boxShadow: {
        glass: '0 8px 30px rgba(15, 23, 42, 0.45)'
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 55%)'
      }
    }
  },
  plugins: []
};
