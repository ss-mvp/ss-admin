const tokenString = process.env.REACT_APP_TOKEN_STRING || 'adminToken';

export const get = () => localStorage.getItem(tokenString);
export const set = (t) => localStorage.setItem(tokenString, t);
export const clear = () => localStorage.removeItem(tokenString);
