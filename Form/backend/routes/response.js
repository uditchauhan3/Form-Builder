const express = require('express');
const Response = require('../model/response');

const router = express.Router();

// Save responses to a form
router.post('/responses/:formId', async (req, res) => {
  try {
    const response = new Response({ formId: req.params.formId, responses: req.body.responses });
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get responses for a form
router.get('/responses:formId', async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    res.json(responses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
