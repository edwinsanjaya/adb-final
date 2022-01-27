const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/authMiddleware').isAuth;

router.get('/', isAuth, (req, res, next) => {
  res.json({ username: req.user.username, userId: req.user.user_id })
})

module.exports = router;