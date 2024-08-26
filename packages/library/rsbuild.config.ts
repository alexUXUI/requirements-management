import { defineConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Library',
  },
  server: {
    port: 3001,
  },
  // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
  dev: {
    assetPrefix: true,
  },
  output: {
    assetPrefix: 'https://requirements-manager.s3.amazonaws.com/content/library/0.0.2',
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'library',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'library',
          exposes: {
            './library': './src/library.ts',
          },
        }),
      ],
    },
  }
});
