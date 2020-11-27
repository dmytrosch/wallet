export const isAuthentificated = (state) => (state.token ? true : false);
export const getUserName = (state) => state.auth.user.name;

