require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/policy", require("./routes/policy"));

app.listen(3000, () => console.log("Policy Q&A Bot running on port 3000"));
