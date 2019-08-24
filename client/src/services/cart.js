import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        addToCart: '/cart/',
        getCart: '/cart/',
        removeProduct: '/cart/remove',
        finishOrder: '/order'
    }

    const addToCart = async (id, quantity) => {
        return await axios.post(routes.addToCart, { productId: id, quantity });
    }

    const getCart = async () => {
        return await axios.get(routes.getCart);
    }

    const removeProduct = async productId => {
        return await axios.post(routes.removeProduct, { productId })
    }

    const finishOrder = async payload => {
        return await axios.post(routes.finishOrder, payload);
    }

    return {
        addToCart,
        getCart,
        removeProduct,
        finishOrder
    }
})();
