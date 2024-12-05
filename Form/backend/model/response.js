const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  responses: { type: Array, required: true }, // Responses mapped to questions
}, { timestamps: true });

module.exports = mongoose.model('Response', responseSchema);
