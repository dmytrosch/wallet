import axios from 'axios';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com'
export const logoutApi =() => axios.delete("/api/auth/sign-out");
