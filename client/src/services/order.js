import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        getOrder: '/order/',
    }

    const getOrder = async orderId =>
        await axios.get(routes.getOrder + id);

    return {
        getOrder
    }

})();