# Requirements Manager

Allows users to:
1. Upload documents 
2. View the document requirements in a Library 
3. Manage user access to the library

These features are organized in three different builds, each located in the `/packages` section.

These three builds are composed by the MFE Registry.

The MFE Registry is consumed by the Application Shell.

Requirements Manager installed the App shell, which talks to the MFE Registry to get the MFE Manifest.

Once the App Shell has the MFE Manifest, it can load the individual MFE assets.

## Dev
```shell
$ npm run dev
```

## Deploy 

```shell
aws s3 sync ./dist s3://requirements-manager/$DOMAIN/$MFE_NAME/$VERSION
```
