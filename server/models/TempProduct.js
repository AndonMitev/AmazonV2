const mongoose = require('mongoose');

const tempProductSchema = new mongoose.Schema({
    owner: { type: mongoose.SchemaTypes.ObjectId, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    state: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('TempProduct', tempProductSchema);