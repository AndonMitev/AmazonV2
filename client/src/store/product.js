import productServices from '../services/product';

const state = {
    product: {
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
        console.log(response);
        commit('setProduct')
    }
};

const mutations = {
    setProduct: (state, product) => ({ ...state, product })
};

const getters = {
    product: state => state.product
};

export default {
    state,
    actions,
    mutations,
    getters
}