import creatingPhasesServices from '../services/product-creating-phases';

const state = {
    // tempProduct: {
    //     name: '',
    //     price: 0,
    //     quantity: 0,
    //     description: '',
    //     state: ''
    // },
    currentStep: 1
};

const actions = {
    async completeStepOne({ commit }, { product, currentStep }) {
        const response = await creatingPhasesServices.completeStep({ product, currentStep });
        commit('setStateAfterStepOne', response.data.currentStep)
    },

    async getCurrentStep({ commit }) {
        const response = await creatingPhasesServices.getCurrentStep();
        const currentStep = response.data.currentPhase.currentStep;
        commit('setStateOnRefresh', currentStep)
    }
};

const mutations = {
    setStateAfterStepOne: (state, currentStep) => state.currentStep = currentStep,
    setStateOnRefresh: (state, currentStep) => state.currentStep = currentStep
};

const getters = {
    step: state => state.currentStep
};

export default {
    state,
    actions,
    mutations,
    getters
}