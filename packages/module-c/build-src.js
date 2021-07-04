const esbuild = require('esbuild');

esbuild.build({
  entryPoints: [
    'src/index.js',
  ],
  outfile: 'dist/index.js',
  bundle: true,
  platform: "node",
  format: "esm",
  target: "es2017",
});
