# strapi-provider-upload-ibm

[Strapi Upload plugin provider](https://strapi.io/documentation/v3.x/plugins/upload.html#using-a-provider) for [IBM Cloud Object Storage](https://www.ibm.com/cloud/object-storage).

## Install

```sh
npm install --save IBMResearch/strapi-provider-upload-ibm-object-storage
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
      endpoint: env('IBM_COS_ENDPOINT', '<endpoint>'),
      apiKeyId: env('IBM_COS_API_KEY_ID', '<api-key>'),
      serviceInstanceId: env('IBM_COS_SERVICE_INSTANCE_ID', '<resource-instance-id>'),
      params: {
        Bucket: env('IBM_COS_BUCKET', '<bucket>'),
      },
    },
  },
});
```

To get these values you need to create new service credentials. Except for the `endpoint`, which is provided in the setup section of the bucket.

You can read more about the configuration framework and the usage of environment variables in the [Strapi 3.x stable documentation](https://strapi.io/documentation/v3.x/concepts/configurations.html#environment-variables).
