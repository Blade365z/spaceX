import mockyApi from "../APIs/mockyApi";

export const loginUser = (userName) => async dispatch => {
    let secret=[];
    const response = secret[userName] ? await mockyApi.get(secret[userName]) : null;
    dispatch({
        type: 'LOG_IN_USER',
        payload: response
    });
}