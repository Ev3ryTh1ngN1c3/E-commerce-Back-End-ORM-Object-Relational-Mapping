// import seed functions for categories, products, tags & product tags
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// import the sequelize connection
const sequelize = require('../config/connection');

// function to seed the database with all data
const seedAll = async () => {
  // sync the database by dropping & recreating tables
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // seed categories
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // seed products
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // seed tags
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // seed product tags
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // exit the process
  process.exit(0);
};

// call the seedAll function to start seeding the database
seedAll();
