const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => res.json({ success: true }));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.json({ success: true });
})

module.exports = router;