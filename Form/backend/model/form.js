const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Categorize, Cloze, Comprehension
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // Dynamic question data
  image: { type: String, default: '' }, // Optional image URL
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: { type: String, default: '' }, // Header image URL
  questions: [questionSchema],
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
