// awsConfig.js
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIA6EON3XJ5PPUH44NY",
  secretAccessKey: "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",
  region: "af-south-1",
});

const s3 = new AWS.S3({
  params: {
    Bucket: "merkandi",
  },
});
export default s3;
