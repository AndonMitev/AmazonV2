const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const commentSchema = new mongoose.Schema({
    productId: { type: objectId, ref: 'Product' },
    userId: { type: objectId, ref: 'User' },
    email: { type: String, required: true },
    content: { type: String, required: [true, 'Comment content is required'] },
    createdAt: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Comment', commentSchema);