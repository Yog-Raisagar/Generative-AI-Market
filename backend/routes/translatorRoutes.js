const express = require('express');
const translateGenerator = require('../controllers/translatorController.js');

const router = express.Router();

router.post('/',translateGenerator)



module.exports = router;