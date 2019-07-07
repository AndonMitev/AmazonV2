const router = require('express').Router();
const mongose = require('mongoose');
const Comment = mongose.model('Comment');
const Product = mongose.model('Product');
const verifyToken = require('../middleware/verify-token');

const onCommentAdded = async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.userData._id;
        const content = req.body.content;

        const comment = await Comment.create({ productId, userId, content });
        const product = await Product.findById(productId);
        product.comments.push(comment._id);
        await product.save();
        const newStateProduct = await Product.findById(productId).populate('comments');

        return res
            .status(200)
            .json({
                message: 'Comment successfully added',
                comments: newStateProduct.comments
            })
    } catch (error) {
        return res
            .status(500)
            .json({ error });
    }
}

const onGettingAllComments = async (req, res) => {
    try {
        const productId = req.params.productId;

        const product = await Product.findById(productId).populate('comments');

        return res
            .status(200)
            .json({ comments: product.comments });
    } catch (error) {
        return res
            .status(500)
            .json({ error });
    }
}

const onCommentRemove = async (req, res) => {
    try {
        const productId = req.params.productId;
        const commentId = req.params.commentId;

        await Comment.findByIdAndRemove(commentId);
        const product = await Product.findById(productId);
        product.comments.filter(existingCommentId => existingCommentId !== commentId);
        await product.save();
        const newStateProduct = await Product.findById(productId).populate('comments');
        return res
            .status(200)
            .json({
                message: 'Comment successfully deleted',
                comments: newStateProduct.comments
            });
    } catch (error) {
        return res
            .status(500)
            .json({ error });
    }
}

module.exports = router
    .get('/product/:productId/comment', onGettingAllComments)
    .post('/product/:productId/comment', verifyToken, onCommentAdded)
    .delete('/product/:productId/comment/:commentId', verifyToken, onCommentRemove);