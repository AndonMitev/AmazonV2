const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const userSchema = new mongoose.Schema({
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    address: { type: String, required: [true, 'Address is required'] },
    phone: { type: String },
    firstName: {type: String, required: [true, 'First name is required']},
    lastName: {type: String, required: [true, 'First name is required']},
    boughtProducts: [{ type: objectId, ref: 'Product', default: [] }],
    soldProducts: [{ type: objectId, ref: 'Product', default: [] }],
    favProducts: [{ type: objectId, ref: 'Product', default: [] }],
    tokens: { type: Number, default: 0 },
    roles: [{ type: String, default: 'normal', enum: ['admin', 'normal', 'advanced'] }]
});

module.exports = mongoose.model('User', userSchema);