const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const userSchema = new mongoose.Schema({
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    address: { type: String, required: [true, 'Address is required'] },
    phone: { type: String },
    boughtProducts: [{ type: objectId, ref: 'Product' }],
    soldProducts: [{ type: objectId, ref: 'Product' }],
    tokens: { type: Number, default: 0 },
    roles: [{type: String, default: 'normal', enum: ['admin', 'normal', 'advanced']}]
});

module.exports = mongoose.model('User', userSchema);