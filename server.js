const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const db = require('./config/database');
const passport = require('passport');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const actors = require('./routes/api/actors');
const users = require('./routes/api/users');
const sessionRoute = require('./routes/api/session');
const authentication = require('./routes/api/authentication');
const articleRoute = require('./routes/api/articles');

const app = express();

sessionStore = new SequelizeStore({
  db: db
});
app.use(session({
  secret: 'keyboard cat',
  store: sessionStore,
  resave: false,
  proxy: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // equals 1 day
  }
}));

sessionStore.sync();

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

// Routes
app.use('/api/actors', actors);
app.use('/api/users', users);
app.use('/api/authentication', authentication);
app.use('/api/session', sessionRoute);
app.use('/api/articles', articleRoute);

require('./models/Article');

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder (load index.html in here)
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))
