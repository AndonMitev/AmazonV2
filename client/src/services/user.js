import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        signup: '/signup',
        signin: '/signin',
        profile: '/profile/'
    }

    const register = async userData =>
        await axios.post(routes.signup, userData);


    const login = async userData =>
        await axios.post(routes.signin, userData);

    const profile = async userId =>
        await axios.get(routes.profile + userId)




    return {
        register,
        login,
        profile
    }

})();