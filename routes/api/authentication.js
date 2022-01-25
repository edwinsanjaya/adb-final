const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local'));

module.exports = router;