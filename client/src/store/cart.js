import cartServices from '../services/cart';

const state = {
    productsInCart: []
}

const actions = {
    async addToCartAction({ commit }, {id, quantity}) {
        await cartServices.addToCart(id, quantity);
    },
    async getCartAction({ commit }) {
        const response = await cartServices.getCart();
        commit('setProductInCart', response.data.cart.productsId);
    },
    async removeProductFromCartAction({commit}, productId) {
        const response = await cartServices.removeProduct(productId);
        commit('setProductInCart', response.data.cart.productsId);
    }
}

const mutations = {
    setProductInCart: (state, products) => state.productsInCart = products
}

const getters = {
    productsInCart: state => state.productsInCart
}

export default {
    state,
    actions,
    mutations,
    getters
}