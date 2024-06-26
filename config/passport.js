const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const { validPassword } = require('../utils/passwordUtils');

const customFields = {
  usernameField: 'uname',
  passwordField: 'pw'
}

const verifyCallback = (username, password, done) => {
  User.findOne({
    where: { username: username }
  }).then((user) => {
    if (!user) return done(null, false)

    const isValid = validPassword(password, user.hash, user.salt);

    if (isValid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((userId, done) => {
  User.findByPk(userId)
    .then((user) => done(null, user))
    .catch(err => done(err));
});