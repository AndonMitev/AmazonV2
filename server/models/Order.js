const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: { type: objectId, ref: 'User', required: true },
    productsId: [{ type: mongoose.SchemaTypes.ObjectId, default: [] }]
});

module.exports = mongoose.model('Order', orderSchema);