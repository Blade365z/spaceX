import mockyAPI from "../../APIs/mockyAPI";

export const SaveLoginMetaDataToLocalStorage = function (token) {
        localStorage.setItem('token', token);
}

export const getLogInStateFromLocalStorage = function () {
    let token = null;
    if (localStorage.getItem('token')) {
        token = localStorage.getItem('token');
        return _isTokenValid(token) ? true : false;
    } else {
        return false
    }
}


export const _imitateLoginBackend = function (userName) {
    const secretDict = {
        guest: '42ca2b1f-cd2c-480c-ab5d-5a313378cf63'
    }
    if (secretDict[userName]) {
        SaveLoginMetaDataToLocalStorage(secretDict[userName]);
        return secretDict[userName];
    }
}

export const _isTokenValid = async (token) => {
    let response = await mockyAPI.get(`/${token}`);
    return response.id ? true : false
}

export const _imitateLogout = function () {

}
