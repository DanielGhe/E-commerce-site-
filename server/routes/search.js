const router = require("express").Router();

const algoliaSearch = require("algoliasearch");

const client = algoliaSearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SECRET
);

// mongoose-algolia -> sincronizează documentele cu algolia
// algoliasearch -> caută date în baza de date algolia

const index = client.initIndex(process.env.ALGOLIA_INDEX);

router.post("/search", async (req, res) => {
  try {
    let result = await index.search(req.body.title);
    res.json(result.hits);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
