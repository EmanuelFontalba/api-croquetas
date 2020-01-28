const express = require('express');
const router = express.Router();

const { getStatus } = require('../controllers/index/index');

// GET
// /users
// /users/gender/:gender
// /users/ip/:ip
// /users/name/:name
// /users/find/:query
// /user/:id

// POST
// /users

// PUT
// /user/:id

// DELETE
// /user/:id

router.use('/', getStatus);

module.exports = router;
