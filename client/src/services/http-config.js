import axios from 'axios';
import lsService from './local-storage';
const baseUrl = 'http://localhost:7000';

// Attach token to the request
axios.interceptors.request.use(request => {
    if (request.url !== '/signin' || request.url !== '/signup') {
        const token = lsService.getLsStorage('token');
        request.headers.Authorization = token ? `Bearer + ${token}` : '';
    }
    return request;
})

// Handle error response
axios.interceptors.response.use(response => {
    return response;
}, error => {
    const status = error.response.status;
    const message = error.response.data.message;
    switch(status) {
        case 401:
            window.toastr.error(message, 'Error');
            break;
    }

    return Promise.reject(error);
});

export default baseUrl;