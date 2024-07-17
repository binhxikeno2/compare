/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/page/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        xl: '1367px',
        lg: '1023px',
        md: '980px',
        sm: '639px',
        xs: '480px',
      },
      boxShadow: {
        'box-1': '0 .5rem 1rem rgba(0,0,0,.05)',
        'bottom-1': 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
      },
    },
    colors: {
      white: '#ffffff',
      primary: '#009efb',
      secondary: '#F3704D',
      dark: '#35363b',
      third: '#604dcf',
      success: '#02B3A9',
      warning: '#ffbc34',
      danger: '#f62d51',
      'gray-1': '#f8f9fa',
      'gray-2': '#F2F7F8',
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
