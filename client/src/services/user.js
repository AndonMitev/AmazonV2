import baseUrl from './http-config';
import axios from 'axios';

export default (() => {
    axios.defaults.baseURL = baseUrl;
    const routes = {
        signup: '/signup',
        login: '/signin'
    }

    const register = async userData => {
        return await axios.post(baseUrl + routes.signup, userData);
    }

    const login = async userData => {
        return await axios.post(baseUrl + routes.signup, userData);
    }

    return {
        register,
        login
    }

})();