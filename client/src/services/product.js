import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;
    const routes = {
        addProduct: '/product/add'
    }


    const createNewProduct = async product => {
        return await axios.post(routes.addProduct, product);
    }

    return {
        createNewProduct
    }

})();