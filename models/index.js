// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// export the models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
