const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// the `/api/tags` endpoint

// GET route to get all tags
router.get('/', async (req, res) => {
  try {
    // find all tags & include associated product data
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products',
          attributes: ['id', 'product_name', 'price', 'stock'],
        },
      ],
    });

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to get one tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id` & include associated product data
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products',
          attributes: ['id', 'product_name', 'price', 'stock'],
        },
      ],
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create a new tag
router.post('/', async (req, res) => {
  try {
    // Create a new tag
    const tag = await Tag.create(req.body);

    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route to update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tag[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE route to delete one tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Delete one tag by its `id` value
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;