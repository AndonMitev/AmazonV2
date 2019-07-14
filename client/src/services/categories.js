import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;
    const routes = {
        addToCategory: '/categories/add/'
    }

    const addProductToCategories = async (categories, productId) => {
        axios.post(addToCategory + productId, categories);
    }

    return {
        addProductToCategories
    }

})();