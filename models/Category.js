// import the necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create the category model by extending the sequelize model class
class Category extends Model {}

// initialize the Category model with the column definitions
Category.init(
  {
    // define the 'id' column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the 'category_name' column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // set the sequelize instance & other options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// export the category model
module.exports = Category;
