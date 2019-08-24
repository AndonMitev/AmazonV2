import cartServices from '../services/cart';

const state = {
    productsInCart: []
}

const actions = {
    async addToCartAction({ commit }, { id, quantity }) {
        const response = await cartServices.addToCart(id, quantity);
        commit('setProduct', response.data.product);

    },
    async getCartAction({ commit }) {
        const response = await cartServices.getCart();
        commit('setProductInCart', response.data.cart.productsId);
    },
    async removeProductFromCartAction({ commit }, productId) {
        const response = await cartServices.removeProduct(productId);
        commit('setProductInCart', response.data.cart.productsId);
    },
    async finishOrder({commit}, _) {
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