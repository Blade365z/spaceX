export const loginUser = (token) => {
    return {
        type: 'LOGIN',
        payload: token
    }
}