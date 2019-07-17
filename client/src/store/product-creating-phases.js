import creatingPhasesServices from '../services/product-creating-phases';
import productServices from '../services/product';

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
        const data = response.data;
        const currentStep = data.currentPhase.currentStep;
        const product = data.product;
        commit('setCurrentStep', currentStep);
        commit('setProduct', product);
    },

    async completeFirstStep({ commit }, { product, step }) {
        const response = await creatingPhasesServices.completeFirstStep({ product, step });
        commit('setCurrentStep', response.data.step)
    },

    async completeSecondStep({ commit }, { categories, step }) {
        const response = await creatingPhasesServices.completeSecondStep({ categories, step });
        const currentStep = response.data.currentPhase.currentStep;
        commit('setCurrentStep', currentStep)
    },

    async completeThirdStep({ commit }, images) {
        const response = await creatingPhasesServices.completeThirdStep(images);
        const data = response.data;
        const currentStep = data.currentPhase.currentStep;
        const product = data.tempProduct;
        commit('setCurrentStep', currentStep);
        commit('setProduct', product);
    },
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