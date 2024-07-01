/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // auto prefixer browser
    autoprefixer: {},
    //convert to rem
    'postcss-pxtorem': { propList: ['*'], rootValue: 16, minPixelValue: 50 },
  },
};

export default config;
