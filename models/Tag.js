// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// define the Tag model
class Tag extends Model {}

// initialize the tag model with column definitions
Tag.init(
  {
    // define the id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define the tag_name column as a string type
    tag_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    // configure the model options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// export the Tag model
module.exports = Tag;
