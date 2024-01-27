const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// import & use the category routes
router.use('/categories', categoryRoutes);

// import & use the product routes
router.use('/products', productRoutes);

// import & use the tag routes
router.use('/tags', tagRoutes);

module.exports = router;
