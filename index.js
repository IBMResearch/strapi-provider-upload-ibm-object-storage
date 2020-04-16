'use strict';

const ibm = require('ibm-cos-sdk');

function buildKey(name, hash) {
  return `${hash}${name}`;
}

function buildUrl(endpoint, bucket, key) {
  return `https://${endpoint}/${bucket}/${key}`;
}

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
        const key = buildKey(file.name, file.hash);

        await cos
          .putObject({
            Bucket: bucketName,
            Key: key,
            Body: Buffer.from(file.buffer, 'binary'),
            ACL: 'public-read',
            ContentType: file.mime,
          })
          .promise();

        /* eslint-disable no-param-reassign */
        file.public_id = key;
        file.url = buildUrl(endpoint, bucketName, key);
        /* eslint-enable no-param-reassign */
      },

      async delete(file) {
        const key = buildKey(file.name, file.hash);

        return cos
          .deleteObject({
            Key: key,
            Bucket: bucketName,
          })
          .promise();
      },
    };
  },
};
