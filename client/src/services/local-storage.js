export default (() => {

    const setLsStorage = ({ key, value }) => {
        localStorage.setItem(key, value);
    }

    const getLsStorage = key => {
        return localStorage.getItem(key);
    }

    const checkLsStorage = key => {
        return localStorage.getItem(key);
    }

    const deleteFromLsStorage = key => {
        localStorage.removeItem(key);
    }

    const setUserData = userData => {
        const token = userData.token;
        const email = userData.email;

        setLsStorage({ key: 'token', value: token });
        setLsStorage({ key: 'email', value: email });
    }

    return {
        setLsStorage,
        getLsStorage,
        checkLsStorage,
        deleteFromLsStorage,
        setUserData
    }

})();