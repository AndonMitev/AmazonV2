import productServices from '../services/product';

const state = {
    model: {
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
    async finishCreatingPhaseAction({ commit }, productData) {
        const response = await productServices.createNewProduct(productData);
        commit('setProduct', response.data.product);
        commit('setIsLoading', false);
    },
    async getProductByIdAction({ commit }, productId) {
        const response = await productServices.getProductById(productId);
        commit('setProduct', response.data.product);
        commit('setIsLoading', false);
    },
    async addLikeAction({ commit }, productId) {
        const response = await productServices.addLike(productId);
        commit('setProduct', response.data.product);
        commit('setIsLoading', false);
    },
    async addViewAction({ commit }, productId) {
        const response = await productServices.addView(productId);
        commit('setProduct', response.data.product);
        commit('setIsLoading', false);
    },
    async addRaitingAction({ commit }, payload) {
        const response = await productServices.addVote(payload);
        commit('setProduct', response.data.product);
        commit('setIsLoading', false);
    },
};

const mutations = {
    setProduct: (state, product) => state.model = product
};

const getters = {
    product: state => state.model
};

export default {
    state,
    actions,
    mutations,
    getters
}