/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the Apache license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const ibm = require('ibm-cos-sdk');

const buildUrl = (options, key) =>
  `https://${options.endpoint}/${options.params.Bucket}/${key}`;

module.exports = {
  init: (providerOptions) => {
    const cos = new ibm.S3(providerOptions);

    return {
      async upload(file, customParams = {}) {
        await cos
          .putObject({
            Key: file.hash,
            Body: Buffer.from(file.buffer, 'binary'),
            ACL: 'public-read',
            ContentType: file.mime,
            ...customParams,
          })
          .promise();

        // eslint-disable-next-line no-param-reassign
        file.url = buildUrl(providerOptions, file.hash);
      },

      async delete(file, customParams = {}) {
        return cos
          .deleteObject({
            Key: file.hash,
            ...customParams,
          })
          .promise();
      },
    };
  },
};
