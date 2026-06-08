const express = require('express');
const grammerFixerGenerator = require('../controllers/grammerFixController')

const router = express.Router();

router.post('/',grammerFixerGenerator)



module.exports = router;