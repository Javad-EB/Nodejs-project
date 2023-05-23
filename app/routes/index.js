const express = require('express');
const router = express.Router();

const homeRoute = require('./home')
const registerRoutes = require('./auth/register')

router.use('/', homeRoute);
router.use('/auth', registerRoutes);
module.exports = router;

