const { Category } = require('../models');

// array of category data to be inserted into the database
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// function to seed the categories into the database
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
