'use strict';

const ibm = require('ibm-cos-sdk');

module.exports = {
  init: (providerOptions) => {
    const {
      endpoint,
      apiKeyId,
      serviceInstanceId,
      bucketName,
    } = providerOptions;

    const cos = new ibm.S3({
      endpoint,
      apiKeyId,
      serviceInstanceId,
    });

    return {
      async upload(file) {
        await cos
          .putObject({
            Bucket: bucketName,
            Key: file.hash,
            Body: Buffer.from(file.buffer, 'binary'),
            ACL: 'public-read',
            ContentType: file.mime,
          })
          .promise();

        // eslint-disable-next-line no-param-reassign
        file.url = `https://${endpoint}/${bucketName}/${file.hash}`;
      },

      async delete(file) {
        return cos
          .deleteObject({
            Key: file.hash,
            Bucket: bucketName,
          })
          .promise();
      },
    };
  },
};
