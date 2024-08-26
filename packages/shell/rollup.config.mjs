// Import rollup plugins
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';
import del from 'rollup-plugin-delete';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './src/index.ts',
  plugins: [
    // Clear the build directory
    // del({ targets: 'src/*' }),
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Convert CommonJS modules to ES6
    commonjs(),
    // Handle JSON files
    json(),
    // Handle TypeScript files
    typescript(),
    // Minify JS
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    generatePackageJson({
      baseContents: {
        name: 'shell',
        version: '0.0.1',
        main: 'index.js',
      },
    }),
  ],
  output: {
    dir: 'package',
  },
  preserveEntrySignatures: 'strict',
};
