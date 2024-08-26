// import('./shell');
// import './index.css';

import { init, loadRemote } from '@module-federation/enhanced/runtime';

/**
 * FrontendManifest is the schema for the manifest 
 * that is fetched from the Registry. 
 * 
 * This manifest declares the micro-frontends that are available for
 * the shell to load, based on versions, traffic splitting,
 * and business logic related to access rights, users, and plans.
 */
interface FrontendManifest {
    microFrontends: MFEList;
    schema: string
}

interface MFEList {
    [key: string]: MicroFrontend[];
}

interface MicroFrontend {
    fallbackUrl: string;
    metadata: {
        name: string;
        version: string;
    };
    url: string;
}

/**
 * Engineers and Quality Engineers
 * can use this function to mock the manifest
 * for local development and testing.
 */
const getLocalManifest = () => {
    // check session storage for manifest
    const manifest = sessionStorage.getItem('manifest');
    if (manifest) {
        return JSON.parse(manifest);
    }
    return null;
}

/**
 * Gets the frontend manifest from Registry
 */
const fetchFrontendManifest = async () => {
    const localManifest = getLocalManifest();
    if (localManifest) {
        console.log('[Manifest] Loaded from Local', localManifest);
        return localManifest;
    }

    const url = 'https://mhhk7kypuf.execute-api.us-east-1.amazonaws.com/Stage/projects/3d3f2096-9078-4aa1-a68e-96143758fda8/microFrontends'
    const response = await fetch(url);
    const manifest = await response.json();
    console.log('[Manifest] Loaded from Registry', manifest);
    return manifest;
}

(async () => {
    try {
        const manifest: FrontendManifest = await fetchFrontendManifest();

        /**
         * Translates the manifest into a format that the Federation runtime can understand to load the js assets
         */
        const mfeConfigurations = Object.entries(manifest?.microFrontends).map(([key, value]) => {
            const name = key.split('/')[1];
            return {
                name: name,
                entry: value[0].url,
            }
        });

        /**
         * Initializes the Federation runtime with the MFE configurations
         */
        await init({ name: 'shell', remotes: mfeConfigurations });

        const microFrontends = Object.entries(manifest?.microFrontends).map(([key, value]) => {
            const name = key.split('/')[1];
            return {
                name: `${name}/${name}`,
                entry: value[0].url,
            }
        })

        for (const frontend of microFrontends) {
            /**
             * Loads the assets for the MFE from S3
             */
            const remoteModule = await loadRemote<any>(frontend.name);
            /**
             * This is where the plugin API begins
             */
            if (remoteModule?.Run) {
                remoteModule.Run();
            }
        }
    } catch (error) {
        console.error('Error loading manifest', error);
        console.error(error);
    }
})();

