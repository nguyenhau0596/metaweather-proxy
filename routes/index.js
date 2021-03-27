var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async function(req, res, next) {
  try {
    const response = await axios({ url: `https://www.metaweather.com${req.originalUrl}` });
    res.json(response.data);
  } catch (err) {
    res.json({});
  }
});

module.exports = router;
