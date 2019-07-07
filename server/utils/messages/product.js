const requiredMessage = property => `${property} of the product is required.`;

module.exports = {
  name: {
    required: requiredMessage('Name'),
    minLength: 'Please enter at least 3 symbols',
    maxLength: 'Please enter less or equal to 18 symbols'
  },
  categories: requiredMessage('Category'),
  images: requiredMessage('Image'),
  price: {
    required: requiredMessage('Price'),
    minPrice: 'Please enter at least 0.01 wei'
  },
  owner: requiredMessage('Owner'),
  description: requiredMessage('Description'),
  quantity: {
    required: requiredMessage('Quantity'),
    minNumber: 'Add at least 1 piece of the current item'
  },
  state: requiredMessage('State')
};
