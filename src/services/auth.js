export const TOKEN_KEY = '@AtillaRoaster-Token';
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const persistUser = (data) => {
  sessionStorage.setItem(TOKEN_KEY, data.AcessToken);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};
