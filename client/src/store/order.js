import orderServices from '../services/order';

const state = {
    order: null
};

const actions = {
    async getOrderAction({ commit }) {
        const response = await orderServices.getOrder();
        console.log(response);
        // commit('setCategories', response.data);
        // commit('setIsLoading', false);
    }
}

const mutations = {
    setOrder: (state, order) => state.order = order,
};

const getters = {
    order: state => state.order,
};

export default {
    state,
    actions,
    mutations,
    getters
}