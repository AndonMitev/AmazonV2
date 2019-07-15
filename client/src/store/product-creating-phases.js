import creatingPhasesServices from '../services/product-creating-phases';

const state = {
    tempProduct: {
        name: '',
        price: 0,
        quantity: 0,
        description: '',
        state: '',
        categories: [],
        images: []
    },
    currentStep: 1
};

const actions = {
    async getCurrentStep({ commit }) {
        const response = await creatingPhasesServices.getCurrentStep();
        const currentStep = response.data.currentPhase.currentStep;
        const product = response.data.product;
        commit('setCurrentStep', currentStep);
        commit('setProduct', product);
    },

    async completeFirstStep({ commit }, { product, currentStep }) {
        const response = await creatingPhasesServices.completeFirstStep({ product, currentStep });
        commit('setCurrentStep', response.data.currentStep)
    },

    async completeSecondStep({ commit }, { categories, step }) {
        const response = await creatingPhasesServices.completeSecondStep({ categories, step });
        const currentStep = response.data.currentStep;
        commit('setCurrentStep', currentStep)
    }
};

const mutations = {
    setCurrentStep: (state, currentStep) => state.currentStep = currentStep,
    setProduct: (state, product) => state.tempProduct = product
};

const getters = {
    step: state => state.currentStep,
    tempProduct: state => state.tempProduct
};

export default {
    state,
    actions,
    mutations,
    getters
}