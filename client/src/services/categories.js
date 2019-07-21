import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;
    const routes = {
        getCategories: '/categories',
        addToCategory: '/categories/add/'
    }

    const getCategories = async () => {
        return await axios.get(routes.getCategories);
    }

    return {
        getCategories
    }

})();