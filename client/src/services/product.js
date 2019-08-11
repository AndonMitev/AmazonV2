import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;
    const routes = {
        getProducyById: '/product/',
        addProduct: '/product/add',
        addLike: '/product/'
    }


    const createNewProduct = async product => {
        return await axios.post(routes.addProduct, product);
    }

    const getProductById = async id => {
        return await axios.get(routes.getProducyById + id);
    }

    const addLike = async id => {
        return await axios.post(routes.addLike + id + '/like');
    }

    return {
        createNewProduct,
        getProductById,
        addLike
    }

})();