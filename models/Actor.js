const { DataTypes } = require('sequelize');
const db = require('../config/database')

const Actor = db.define('actor', {
  actor_id: {
    type: DataTypes.INTEGER,
    //Somehow this help to add id in the response
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  lastUpdate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
},{
  //By default it will put additional s in table name, set to false to disable it
  freezeTableName: true,
  //Set to true if table is using snake_case
  underscored: true,
  //Set to true if data type is timestamp
  timestamps: true,
  //createdAt & updatedAt set by default. set to false if column doesn't exist. 
  createdAt: false,
  //put actual field name if it's exist with different name
  updatedAt: 'lastUpdate'
})

module.exports = Actor