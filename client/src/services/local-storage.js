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

    const setUserData = user => {
        const { token, email, _id } = user.data;

        setLsStorage({ key: 'token', value: token });
        setLsStorage({ key: 'email', value: email });
        setLsStorage({ key: 'id', value: _id });
    }

    return {
        setLsStorage,
        getLsStorage,
        checkLsStorage,
        deleteFromLsStorage,
        setUserData
    }

})();