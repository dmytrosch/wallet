const isAuthentificated = (state) => (state.token ? true : false);
const getUserName = (state) => state.auth.user.name;

export default {
    isAuthentificated,
    getUserName
}
