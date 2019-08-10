import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;
    const routes = {
        addProduct: '/product/add',
        getProducyById: '/product/'
    }


    const createNewProduct = async product => {
        return await axios.post(routes.addProduct, product);
    }

    const getProductById = async id => {
        return await axios.get(routes.getProducyById + id);
    }

    return {
        createNewProduct,
        getProductById
    }

})();