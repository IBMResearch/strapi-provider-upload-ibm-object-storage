# strapi-provider-upload-ibm

[Strapi Upload plugin provider](https://strapi.io/documentation/v3.x/plugins/upload.html#using-a-provider) for [IBM Cloud Object Storage](https://www.ibm.com/cloud/object-storage).

## Install

```sh
npm install strapi-provider-upload-ibm-object-storage
```

## Configuration

Your configuration is passed down to the provider. (e.g: `new imb.S3(config)`).

### Example

In `./config/plugins.js` (or `./config/env/{env}/plugins.js`):

```js
module.exports = ({ env }) => ({
  upload: {
    provider: 'ibm-object-storage',
    providerOptions: {
      endpoint: '<endpoint>',
      apiKeyId: '<api-key>',
      serviceInstanceId: '<resource-instance-id>',
      params: {
        Bucket: '<bucket>',
      },
    },
  }
});
```
