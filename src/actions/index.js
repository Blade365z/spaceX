
export const loginUser = (secret) => {
    return {
        type: 'LOG_IN_USER',
        payload: secret
    };
}