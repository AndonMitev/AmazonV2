const productMessages = require('../messages/product');

module.exports = product => {
  const errors = [];

  if (!product.name) {
    errors.push({ name: productMessages.name.required })
  }

  if (product.categories && !product.categories.length) {
    errors.push({ categories: productMessages.categories })
  }
}