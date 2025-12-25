const { askPolicyQuestion } = require("../services/policyQAService");

exports.askPolicy = async (req, res) => {
  try {
    const { question } = req.body;
    const result = await askPolicyQuestion(question);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
