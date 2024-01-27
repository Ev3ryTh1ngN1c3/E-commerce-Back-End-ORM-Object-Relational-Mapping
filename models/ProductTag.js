// import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// define the ProductTag model
class ProductTag extends Model {}

// initialize the ProductTag model with column definitions
ProductTag.init(
  {
    // define the id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define the product_id column as a foreign key referencing the product model's id column
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    // define the tag_id column as a foreign key referencing the tag model's id column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    // configure the model options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// export the ProductTag model
module.exports = ProductTag;
