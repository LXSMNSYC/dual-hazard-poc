const esbuild = require('esbuild');

esbuild.build({
  entryPoints: [
    'src/index.js',
  ],
  outfile: 'dist/index.js',
  bundle: true,
  external: [
    'module-d'
  ],
  platform: "node",
  format: "cjs",
  target: "es2017",
});