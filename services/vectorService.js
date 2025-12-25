const { index } = require("../config/pinecone");

async function upsertVector(id, vector, metadata) {
  await index.upsert([{ id, values: vector, metadata }]);
}

async function queryVector(vector, topK = 3) {
  const res = await index.query({ vector, topK, includeMetadata: true });
  return res.matches;
}

module.exports = { upsertVector, queryVector };
