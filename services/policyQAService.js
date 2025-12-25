const { queryVector } = require("./vectorService");
const { createEmbedding } = require("./embeddingService");
const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function askPolicyQuestion(question) {
  const qEmbedding = await createEmbedding(question);
  const matches = await queryVector(qEmbedding, 3);

  const contextText = matches.map(m => m.metadata.text).join("\n");

  const completion = await openai.chat.completions.create({
    model: "gpt-5.2",
    messages: [
      { role: "system", content: "You answer strictly from policy context. If unsure, say 'Not covered in policy'." },
      { role: "user", content: `Policy:\n${contextText}\n\nQuestion: ${question}` }
    ]
  });

  return {
    answer: completion.choices[0].message.content,
    sources: matches.map(m => ({ score: m.score, reference: m.id }))
  };
}

module.exports = { askPolicyQuestion };
