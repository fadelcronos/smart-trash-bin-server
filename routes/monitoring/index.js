const express = require('express');
const router = express.Router();

const monitoring = require('../../controller/monitoring');

router.post('/', monitoring.monitor);

module.exports = router;