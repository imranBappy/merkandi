const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

async function sendProductToAlgolia(product) {
  return await index.saveObject({
    objectID: product._id,
    ...product,
  });
}

module.exports = sendProductToAlgolia;
