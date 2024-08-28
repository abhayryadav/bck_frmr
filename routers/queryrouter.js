const express = require('express');
const { submitQuery } = require('../controllers/querycontroller');
const router = express.Router();

// Define routes and associate them with controller functions
router.post('/queries', submitQuery);

module.exports = router;
