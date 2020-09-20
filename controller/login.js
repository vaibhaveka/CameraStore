const express = require('express');
const router = express.Router();
const loginService = require('../service/login');

const User = require('../models/users');

router.post('/register',loginService.register);
router.post('/login',loginService.login);

module.exports = router;