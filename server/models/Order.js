const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: { type: objectId, ref: 'User', required: true },
    productsId: [{ type: objectId, ref: 'Product' }]
});

module.exports = mongoose.model('Order', orderSchema);