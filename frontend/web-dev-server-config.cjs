// required for transforming .tsx files
const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  nodeResolve: true,
  plugins: [esbuildPlugin({ tsx: true, jsxFactory: 'React.createElement', jsxFragment: 'Fragment' })],
};
