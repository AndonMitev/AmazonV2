import axios from 'axios';
import baseUrl from './http-config';
import lsServices from './local-storage';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        step: '/step',
        complete: '/step/complete'
    }

    const getCurrentStep = async () => {
        const userId = localStorage.getItem('token');
        return await axios.post(routes.step, userId);
    }

    const completeStep = async data => {
        return await axios.post(routes.complete, data);
    }

    return {
        getCurrentStep,
        completeStep
    }

})();