import axios from 'axios';
import baseUrl from './http-config';

export default (() => {
    axios.defaults.baseURL = baseUrl;

    const routes = {
        addComment: '/comment/',

    }

    const addComment = async ({id, comment}) =>
        await axios.post(routes.addComment + id, comment);

    return {
        addComment
    }

})();