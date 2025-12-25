# QaBot — Question Answering Bot

A compact Node.js question-answering bot that loads documents, creates embeddings, stores vectors in Pinecone, and answers policy-related queries.

## Features
- Loads PDFs and other documents via the loader in `utils/pdfLoader.js`.
- Builds embeddings with `services/embeddingService.js`.
- Persists vectors using the Pinecone client in `config/pinecone.js` and `services/vectorService.js`.
- Exposes QA endpoints via `routes/policy.js` and `controller/policyController.js`.

## Prerequisites
- Node.js (v16+ recommended)
- A Pinecone account and index
- OpenAI API key (or other embedding provider configured in `services/embeddingService.js`)

## Environment variables
Set these in your shell or a `.env` file (project doesn't include dotenv by default):
- `PINECONE_API_KEY` — your Pinecone API key
- `PINECONE_ENV` — Pinecone environment/region
- `PINECONE_INDEX` — Pinecone index name to use
- `OPENAI_API_KEY` — (if using OpenAI embeddings)

## Install
1. Install dependencies:

```bash
npm install
```

2. Ensure environment variables are set.

## Run
Start the app:

```bash
node index.js
```

The server exposes endpoints defined in `routes/policy.js`. Use the controller `controller/policyController.js` to see expected request/response shapes.

## Project structure (key files)
- `index.js` — app entry point
- `config/pinecone.js` — Pinecone client config
- `utils/pdfLoader.js` — PDF loading utilities
- `services/embeddingService.js` — embedding creation
- `services/vectorService.js` — vector upsert/query helpers
- `services/policyQAService.js` — QA orchestration combining embeddings + retrieval
- `controller/policyController.js` and `routes/policy.js` — HTTP API

## Notes & Recommendations
- Lock down and rotate API keys regularly.
- Add `dotenv` if you prefer `.env` local development.
- Add integration tests for the QA flow that mock Pinecone and the embedding provider.

## Contributing
PRs welcome. Keep changes focused and include tests for new behavior.

## License
Specify your license here.
