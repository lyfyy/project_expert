var express = require('express');
var router = express.Router();
const expert = require('../service/expert')

/* GET home page. */
router.post('/add', async function (req, res, next) {
  const result = await expert.add(req.body)
  res.json(result)
});
router.get('/page', async function (req, res, next) {
  const result = await expert.page()
  res.json(result)
});

router.put('/put', async function (req, res, next) {
  const result = await expert.put(req.body)
  res.json(result)
});
router.delete('/del', async function (req, res, next) {
  const result = await expert.delete(req.body.id)
  res.json(result)
});

module.exports = router;
