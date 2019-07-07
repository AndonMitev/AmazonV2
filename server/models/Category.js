const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name of category is required'] },
    products: [{ type: mongoose.SchemaTypes.ObjectId, default: [] }]
});

module.exports = mongoose.model('Category', categorySchema);