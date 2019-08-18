import categoryServices from '../services/categories';

const state = {
    categories: [],
};

const actions = {
    async getCategoriesAction({ commit }) {
        const response = await categoryServices.getCategories();
        commit('setCategories', response.data);
        commit('setIsLoading', false);
    }
}

const mutations = {
    setCategories: (state, categories) => state.categories = categories,
};

const getters = {
    categories: state => state.categories.categories,
};

export default {
    state,
    actions,
    mutations,
    getters
}