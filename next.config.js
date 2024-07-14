const path = require('path');
const nextTranslate = require('next-translate-plugin');

const dirname = path.resolve();

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(dirname, 'styles')],
  },
  ...nextTranslate(),
  transpilePackages: ['rc-util', '@ant-design', '@ant-design/icons', 'antd', 'rc-pagination', 'rc-picker', 'next-translate-plugin', 'next-translate'],
};
