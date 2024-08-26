import { defineConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Uploader',
  },
  server: {
    port: 3002,
  },
  // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
  dev: {
    assetPrefix: true,
  },
  output: {
    assetPrefix: 'https://requirements-manager.s3.amazonaws.com/content/uploader/0.0.1',
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'uploader',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'uploader',
          exposes: {
            './uploader': './src/uploader.ts',
          },
        }),
      ],
    },
  }
});
