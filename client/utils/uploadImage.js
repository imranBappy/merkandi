import s3 from "@/config/awsConfig";

export const imageBulkUpload = async (images) => {
  try {
    const s3BucketUploadImage = [];
    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const fileName = `${file.name
        .split(".")
        .slice(0, -1)
        .join("-")
        .split(" ")
        .join("-")}-${Date.now()}`;

      const params = {
        Key: fileName,
        ContentType: file.type,
        Body: file,
      };
      const res = await s3.upload(params).promise();
      s3BucketUploadImage.push({
        name: fileName,
        url: res.Location,
      });
    }
    return s3BucketUploadImage;
  } catch (error) {
    return error;
  }
};
