const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new sequelize('sqlite::memory:')

const Vocabulary = sequelize.define()