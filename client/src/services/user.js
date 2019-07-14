import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        signup: '/signup',
        signin: '/signin'
    }

    const register = async userData =>
        await axios.post(routes.signup, userData);


    const login = async userData =>
        await axios.post(routes.signin, userData);


    return {
        register,
        login
    }

})();