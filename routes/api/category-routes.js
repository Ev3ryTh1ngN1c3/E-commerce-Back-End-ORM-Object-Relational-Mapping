const router = require('express').Router();
const { Category, Product } = require('../../models');

// the `/api/categories` endpoint

// GET route to find all categories & include associated products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to find one category by its `id` value & include associated products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT route to update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!category[0]) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE route to delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
