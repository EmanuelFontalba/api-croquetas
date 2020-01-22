const express = require('express');
const router = express.Router();

const finderUsers = require('../../fakeDB/finder');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  const users = finderUsers("first_name", "Hatty");
  console.log(users);
});

module.exports = router;
