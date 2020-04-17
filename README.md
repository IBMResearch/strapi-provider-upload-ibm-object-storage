# strapi-provider-upload-ibm

[Strapi Upload plugin provider](https://strapi.io/documentation/3.0.0-beta.x/plugins/upload.html#using-a-provider) for [IBM Cloud Object Storage](https://www.ibm.com/cloud/object-storage).

## Install

```sh
npm install strapi-provider-upload-ibm-object-storage
```

## Configurations

Your configuration is passed down to the provider. (e.g: `new imb.S3(config)`).

### Example

`./extensions/upload/config/settings.json`

```json
{
  "provider": "ibm-object-storage",
  "providerOptions": {
    "endpoint": "<endpoint>",
    "apiKeyId": "<api-key>",
    "serviceInstanceId": "<resource-instance-id>",
    "params": {
      "Bucket": "<bucket>"
    }
  }
}
```
