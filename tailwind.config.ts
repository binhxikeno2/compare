/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/page/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        xl: '1367px',
        lg: '1023px',
        md: '980px',
        sm: '639px',
        xs: '480px',
      },
    },
    colors: {
      primary: '#232323',
      secondary: '#1d1d1d',
      success: '#18e351',
      error: '#FF3333'
    },
    screens: {
      xl: { max: '1367px' },
      lg: { max: '1023px' },
      md: { max: '980px' },
      sm: { max: '639px' },
      xs: { max: '480px' },
    },
  },
  plugins: [],
};
