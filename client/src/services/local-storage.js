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

    const isUserLogged = () => {
        return localStorage.getItem('id');
    }

    const clearLs = () => {
        localStorage.clear();
    }

    const setUserData = data => {

        const { token, email, _id } = data;

        setLsStorage({ key: 'token', value: token });
        setLsStorage({ key: 'email', value: email });
        setLsStorage({ key: 'id', value: _id });
    }

    return {
        setLsStorage,
        getLsStorage,
        checkLsStorage,
        deleteFromLsStorage,
        setUserData,
        clearLs,
        isUserLogged
    }

})();