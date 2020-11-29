export const isAuthentificated = (state) => (state.auth.token ? true : false);
export const getUserName = (state) => state.auth.user.name;

export const userName = state => state.auth.user.name;


