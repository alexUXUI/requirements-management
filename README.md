# Requirements Manager

Requirements Manager allows users to upload documents with internal requirements, view the requirements in a library, and manage user access to the library.

These three features: Upload, View, and Manage are distributed across three different apps, located in the `/packages` section.


## Dev
```shell
$ npm run dev
```

## Deploy 

```shell
aws s3 sync ./dist s3://requirements-manager/$DOMAIN/$MFE_NAME/$VERSION
```# requirements-management
