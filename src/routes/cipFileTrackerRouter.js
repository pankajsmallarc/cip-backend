const express = require('express');
const cipFileTrackerCtrl = require('../controller/cipFileTrackerController')
const router = express.Router();

router.get('/get',cipFileTrackerCtrl.getCipFiles)

module.exports = router;