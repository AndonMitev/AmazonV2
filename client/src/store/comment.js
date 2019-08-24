import commentServices from '../services/comment';

const state = {
    comment: '',
};

const actions = {
    async addCommentAction({ commit }, payload) {
        const response = await commentServices.addComment(payload);
        commit('setProduct', response.data.product);
    }
}

export default {
    state,
    actions
}