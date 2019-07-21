import categoryServices from '../services/categories';

const state = {
    categories: []
};

const actions = {
    async getCategories({ commit }) {
        const response = await categoryServices.getCategories();
        console.log(response);
    }
}

const mutations = {};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}