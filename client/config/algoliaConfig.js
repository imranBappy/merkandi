import algoliasearch from "algoliasearch/lite";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);
const algolaIndex = client.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
);

export { client, algolaIndex };
