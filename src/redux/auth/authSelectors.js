export const isAuthentificated = (state) => (state.token ? true : false);

export const userName = state => state.auth.user.name;


