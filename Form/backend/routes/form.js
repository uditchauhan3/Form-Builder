const express = require('express');
const Form = require('../model/form');

const router = express.Router();

// Create a new form
router.post('/api/forms', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a form by ID
router.get('/api/forms/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
