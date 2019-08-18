import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        addToCart: '/cart/',
        getCart: '/cart/'
    }

    const addToCart = async id => {
        return await axios.post(routes.addToCart, {productId: id});
    }

    const getCart = async () => {
        return await axios.get(routes.getCart);
    }

    return {
        addToCart,
        getCart
    }
})();
