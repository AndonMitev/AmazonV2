const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const cartSchema = new mongoose.Schema({
    userId: {type: objectId, ref: 'User', required: true},
    productsId: [{ type: objectId, ref: 'Product' }]
});

module.exports = mongoose.model('Cart', cartSchema);