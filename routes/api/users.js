const express = require('express');
const genPassword = require('../../utils/passwordUtils').genPassword;
const passport = require('passport');
const router = express.Router();
const isAuth = require('../middleware/authMiddleware').isAuth;

const User = require('../../models/User');

router.post('/', isAuth, (req, res) => {
  const saltHash = genPassword(req.body.pw);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = {
    username: req.body.uname,
    hash: hash,
    salt: salt
  }
  User.create(newUser)
    .then(user => res.json({ user: user }))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
})

module.exports = router