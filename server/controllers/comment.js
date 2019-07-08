const router = require('express').Router();
const mongose = require('mongoose');
const Comment = mongose.model('Comment');
const Product = mongose.model('Product');
const verifyToken = require('../middleware/verify-token');

const jsonResponseOnError = (res, statusCode, error) =>
    res.status(statusCode).json({ error });


const jsonResponseOnSuccess = (res, statusCode, data) =>
    res.status(statusCode).json(data);

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

        return jsonResponseOnSuccess(res, 200, { comments: newStateProduct.comments, message: 'Comment successfully added' });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}

const onCommentsGetting = async (req, res) => {
    try {
        const productId = req.params.productId;

        const product = await Product.findById(productId).populate('comments');

        return jsonResponseOnSuccess(res, 200, { comments: product.comments });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
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

        return jsonResponseOnSuccess(res, 200, { comments: newStateProduct.comments, message: 'Comment successfully deleted' });
    } catch (error) {
        return jsonResponseOnError(res, 500, error);
    }
}



module.exports = router
    .get('/product/:productId/comment', onCommentsGetting)
    .post('/product/:productId/comment', verifyToken, onCommentAdded)
    .delete('/product/:productId/comment/:commentId', verifyToken, onCommentRemove);