import cartServices from '../services/cart';

const state = {
    productsInCart: []
}

const actions = {
    async addToCartAction({ commit }, productId) {
        await cartServices.addToCart(productId);
    },
    async getCartAction({ commit }) {
        const response = await cartServices.getCart();
        commit('setProductInCart', response.data.cart.productsId);
    }
}

const mutations = {
    setProductInCart: (state, products) => state.productsInCart = products
}

const getters = {
    productsInCart: state => {
        console.log(state);
        return state.productsInCart
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}