const mongoose = require('mongoose');
const message = require('../utils/messages/product');

const ProductSchema = new mongoose.Schema({
  // Required
  owner: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: [true, message.owner] },
  name: { type: String, required: [true, message.name.required], minlength: [3, message.name.minLength], maxlength: [18, message.name.maxLength] },
  categories: [{ type: String, default: [] }],
  images: [{ type: String, default: [] }],
  price: { type: Number, required: [true, message.price.required], min: [0.00001, message.price.minPrice] },
  description: { type: String, required: [true, message.description] },
  quantity: { type: Number, required: [true, message.quantity.required], min: [1, message.quantity.minNumber] },
  state: { type: String, enum: ["new", "used"], required: [true, message.state] },
  // Default
  isDiscounted: { type: Boolean, default: false },
  isAvailable: { type: String, default: true },
  createdAt: { type: Date, default: Date.now },
  boughtCounter: { type: Number, default: 0 },
  discountPercentages: { type: Number, default: 0 },
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User', default: [] }],
  views: { type: Number, default: 0 },
  comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Comment', default: [] }],
  rating: { type: Number, default: 0 },
  pricesOverTime: [{ price: { type: Number }, time: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model('Product', ProductSchema);
