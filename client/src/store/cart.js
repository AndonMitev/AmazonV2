import cartServices from '../services/cart';

const state = {
    productsInCart: []
}

const actions = {
    async addToCartAction({ commit }, { id, quantity }) {

        const response = await cartServices.addToCart(id, quantity);
        commit('setProduct', response.data.product);
        commit('setIsLoading', false);
    },
    async getCartAction({ commit }) {

        const response = await cartServices.getCart();
        commit('setProductInCart', response.data.cart.productsId);
        commit('setIsLoading', false);
    },
    async removeProductFromCartAction({ commit }, productId) {

        const response = await cartServices.removeProduct(productId);
        commit('setProductInCart', response.data.cart.productsId);
        commit('setIsLoading', false);
    },
    async finishOrder({ commit }, _) {
        await cartServices.finishOrder();
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