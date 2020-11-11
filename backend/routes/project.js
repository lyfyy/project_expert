var express = require('express');
var router = express.Router();
const project = require('../service/project')

/* GET home page. */
router.post('/add', async function (req, res, next) {
  const result = await project.add(req.body)
  res.json(result)
});
router.get('/page', async function (req, res, next) {
  const result = await project.page()
  res.json(result)
});

router.get('/projectPage', async function (req, res, next) {
  const status = req.query.status || {}
  const result = await project.projectPage(status)
  res.json(result)
});

router.put('/put', async function (req, res, next) {
  const result = await project.put(req.body)
  res.json(result)
});
router.delete('/del', async function (req, res, next) {
  const result = await project.delete(req.body.id)
  res.json(result)
});

module.exports = router;
