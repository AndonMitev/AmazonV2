import commentServices from '../services/comment';

const state = {
    comment: '',
};

const actions = {
    async addCommentAction({ commit }, payload) {
        commentServices.addComment(payload)
        // const response = await categoryServices.getCategories();
        // commit('setCategories', response.data);
        // commit('setIsLoading', false);
    }
}

export default {
    state,
    actions
}