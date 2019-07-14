import productServices from '../services/product';

const state = {
    productModel: {
        name: '',
        price: 0,
        quantity: 0,
        state: '',
        description: '',
        categories: []
    }
};

const actions = {
    async setProduct({ commit }, payload) {
        const response = await productServices.createNewProduct(payload);
        commit('setProduct', response.data.product);
    }
};

const mutations = {
    setProduct: (state, product) => state.productModel = product
};

const getters = {
    product: state => state.productModel
};

export default {
    state,
    actions,
    mutations,
    getters
}