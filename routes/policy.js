const express = require("express");
const router = express.Router();
const policyController = require("../controller/policyController");

router.post("/ask", policyController.askPolicy);

module.exports = router;
