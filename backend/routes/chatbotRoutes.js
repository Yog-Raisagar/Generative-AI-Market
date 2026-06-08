const express = require('express');
const chatbotAi = require('../controllers/chatbotController.js');

const router = express.Router();

router.post('/', chatbotAi);

module.exports = router;
