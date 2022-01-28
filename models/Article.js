const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Article = db.define('article', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  }
});

Article.sync({ force: false });

module.exports = Article