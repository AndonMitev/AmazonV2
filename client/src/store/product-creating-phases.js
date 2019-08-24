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
    currentStep: 1,
    isLoading: null
};

const actions = {
    async getCurrentStepAction({ commit }, step) {

        const response = await creatingPhasesServices.getCurrentStep(step);
        const data = response.data;
        const currentStep = data.currentPhase.currentStep;
        const product = data.product;
        commit('setCurrentStep', currentStep);
        commit('setProduct', product);
        commit('setIsLoading', false);
    },

    async completeFirstStepAction({ commit }, { product, step }) {

        const response = await creatingPhasesServices.completeFirstStep({ product, step });
        commit('setCurrentStep', response.data.step)
        commit('setIsLoading', false);
    },

    async completeSecondStepAction({ commit }, { categories, step }) {

        const response = await creatingPhasesServices.completeSecondStep({ categories, step });
        const currentStep = response.data.currentPhase.currentStep;
        commit('setCurrentStep', currentStep)
        commit('setIsLoading', false);
    },

    async completeThirdStepAction({ commit }, images) {
        const response = await creatingPhasesServices.completeThirdStep(images);
        const data = response.data;
        const currentStep = data.currentPhase.currentStep;
        const product = data.tempProduct;
        commit('setCurrentStep', currentStep);
        commit('setProduct', product);
        commit('setIsLoading', false);
    },
};

const mutations = {
    setCurrentStep: (state, currentStep) => state.currentStep = currentStep,
    setProduct: (state, product) => state.tempProduct = product,
    setIsLoading: (state, isLoading) => state.isLoading = isLoading
};

const getters = {
    step: state => state.currentStep,
    tempProduct: state => state.tempProduct,
    isLoading: state => state.isLoading
};

export default {
    state,
    actions,
    mutations,
    getters
}