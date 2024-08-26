import { defineConfig } from '@rsbuild/core';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
    server: {
        port: 3000,
    },
    html: {
        title: 'Shell',
    },
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    dev: {
        assetPrefix: true,
    },
    output: {
        assetPrefix: 'https://requirements-manager.s3.amazonaws.com/',
    },
    tools: {
        rspack: {
            output: {
                uniqueName: 'shell',
            },
            plugins: [
                new ModuleFederationPlugin({
                    name: 'shell',
                    exposes: {
                        './shell': './src/shell.ts',
                    },
                }),
            ],
        },
    }
});
