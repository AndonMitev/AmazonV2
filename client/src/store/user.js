import userServices from '../services/user';
import lsServices from '../services/local-storage';

const state = {
    userId: null
}

const actions = {
    async loginAction({ commit }, userData) {
        const response = await userServices.login({ ...userData });
        lsServices.setUserData(response.data);
        console.log(response.data);
        commit('setUserData', response.data._id);
    },
    async logoutAction({ commit }, _) {
        lsServices.clearLs();
        commit('setUserData', null);
    }
}

const mutations = {
    setUserData: (state, id) => state.userId = id
}

const getters = {
    userData: state => state.userId
}

export default {
    state,
    actions,
    mutations,
    getters
}