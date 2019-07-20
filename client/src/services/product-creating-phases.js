import axios from 'axios';
import baseUrl from './http-config';
import lsServices from './local-storage';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        step: '/step',
        firstComplete: '/step/first/complete',
        secondComplete: '/step/second/complete',
        thirdComplete: '/step/three/complete'
    }

    const getCurrentStep = async step => {
        const userId = localStorage.getItem('token');
        return await axios.post(routes.step, {userId, step});
    }

    const completeFirstStep = async data => {
        return await axios.post(routes.firstComplete, data);
    }

    const completeSecondStep = async data => {
        return await axios.post(routes.secondComplete, data);
    }

    const completeThirdStep = async data => {
        return await axios.post(routes.thirdComplete, data);
    } 

    return {
        getCurrentStep,
        completeFirstStep,
        completeSecondStep,
        completeThirdStep
    }

})();