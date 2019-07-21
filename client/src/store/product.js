import productServices from '../services/product';

const state = {
    productModel: {
        name: '',
        price: 0,
        quantity: 0,
        state: '',
        description: '',
        categories: [],
        images: [],
        likes: 0,
        views: 0,
        boughtCounter: 0,
        rating: 0,
        owner: 0,
        comments: [],
        createdAt: null
    }
};

const actions = {

    async finishCreatingPhase({ commit }, productData) {
        const response = await productServices.createNewProduct(productData);
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