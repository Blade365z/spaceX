export const SaveLoginMetaDataToLocalStorage  = function (token) {
    if(!localStorage.getItem('token')){
       localStorage.setItem('token',token); 
    }
}

export const getLogInStateFromLocalStorage  =  function () {
    if (localStorage.getItem('token')) {
        return localStorage.getItem('token')
    }else{
        return null
    }
}


export const _imitateLoginBackend  =  function (userName){
    const secretDict = {
        guest:'42ca2b1f-cd2c-480c-ab5d-5a313378cf63'
    }
    SaveLoginMetaDataToLocalStorage(secretDict[userName]);
    return secretDict[userName];
}



