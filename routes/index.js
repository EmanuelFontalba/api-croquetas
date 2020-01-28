const express = require('express');
const router = express.Router();

const indexRouter = require('../controllers/index/index');
const usersRouter = require('../controllers/users');

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

router.use('/', indexRouter);

module.exports = router;
