import userServices from '../services/user';
import lsServices from '../services/local-storage';

const state = {
    userId: null,
    user: null
}

const actions = {
    async loginAction({ commit }, userData) {
        const response = await userServices.login({ ...userData });
        lsServices.setUserData(response.data);
        commit('setUserData', response.data._id);
    },
    async logoutAction({ commit }, _) {
        lsServices.clearLs();
        commit('setUserData', null);
    },
    async getProfileAction({ commit }, userId) {
        const response = await userServices.profile(userId);
        commit('setUser', response.data.user);
    }
}

const mutations = {
    setUserData: (state, id) => state.userId = id,
    setUser: (state, user) => state.user = user
}

const getters = {
    userData: state => state.userId,
    user: state => state.user
}

export default {
    state,
    actions,
    mutations,
    getters
}