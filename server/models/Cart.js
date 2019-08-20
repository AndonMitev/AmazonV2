const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const cartSchema = new mongoose.Schema({
    userId: { type: objectId, ref: 'User', required: true },
    productsId: [{
        product: { type: objectId, ref: 'Product' },
        quantity: { type: Number, default: 0 }
    }]
});

module.exports = mongoose.model('Cart', cartSchema);