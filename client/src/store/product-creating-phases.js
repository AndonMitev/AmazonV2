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
    },

    async completeThirdStep({ commit }, payload) {
        const response = await creatingPhasesServices.completeThirdStep(payload);
        const images = response.data.productNewState.tempProductId.images;
        commit('setImages', images);
    }
};

const mutations = {
    setCurrentStep: (state, currentStep) => state.currentStep = currentStep,
    setProduct: (state, product) => state.tempProduct = product,
    setImages: (state, images) => state.tempProduct.images = images
};

const getters = {
    step: state => state.currentStep,
    tempProduct: state => state.tempProduct,
    images: state => state.tempProduct.images
};

export default {
    state,
    actions,
    mutations,
    getters
}