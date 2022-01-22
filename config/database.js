const { Sequelize } = require('sequelize')
const dbConfig = require("./keys")

module.exports = new Sequelize(dbConfig.testing.database, dbConfig.testing.user, dbConfig.testing.password, {
  host: dbConfig.testing.host,
  dialect: dbConfig.testing.dialect,
  dialectOptions: {
    connectTimeout: 5000
  }
});
