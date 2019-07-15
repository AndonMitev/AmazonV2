import axios from 'axios';
import baseUrl from './http-config';
import lsServices from './local-storage';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        step: '/step',
        firstComplete: '/step/first/complete',
        secondComplete: '/step/second/complete'
    }

    const getCurrentStep = async () => {
        const userId = localStorage.getItem('token');
        return await axios.post(routes.step, userId);
    }

    const completeFirstStep = async data => {
        return await axios.post(routes.firstComplete, data);
    }

    const completeSecondStep = async data => {
        return await axios.post(routes.secondComplete, data);
    }

    return {
        getCurrentStep,
        completeFirstStep,
        completeSecondStep
    }

})();