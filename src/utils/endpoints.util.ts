const { REACT_APP_BASEURL } = process.env;

export const LOGIN_API = `${REACT_APP_BASEURL}auth/local`;
export const USER_ME_API = `${REACT_APP_BASEURL}users/me`;