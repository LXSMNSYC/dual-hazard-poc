const esbuild = require('esbuild');

esbuild.build({
  entryPoints: [
    'src/index.js',
  ],
  outfile: 'dist/index.js',
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "es2017",
});
esbuild.build({
  entryPoints: [
    'src/index.js',
  ],
  outfile: 'dist/esm/index.js',
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "es2017",
});