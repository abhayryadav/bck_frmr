const express = require('express');
const { getQuery } = require('../controllers/qcontroller'); // Import the getQuery from qController.js
const router = express.Router();

router.get('/q', getQuery); 

module.exports = router;
