const router = require('express').Router();
const apiRoutes = require('./api');

// use the '/api' prefix for all routes defined in the 'apiRoutes' module
router.use('/api', apiRoutes);

// catch-all route for any other routes that are not defined
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;