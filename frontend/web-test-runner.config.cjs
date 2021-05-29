// required by snowpack
process.env.NODE_ENV = 'test';

// required for transforming .tsx files
// ref: https://github.com/modernweb-dev/example-projects/tree/master/react-tsx
const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  nodeResolve: true,
  plugins: [
    require('@snowpack/web-test-runner-plugin')(),
    esbuildPlugin({ tsx: true, jsxFactory: 'React.createElement', jsxFragment: 'Fragment' }),
  ],
  files: '**/*.test.{js,jsx,ts,tsx}',
  puppeteer: true,
};
