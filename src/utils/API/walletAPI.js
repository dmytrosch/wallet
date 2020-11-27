<<<<<<< HEAD
import axios from 'axios';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com'
export const logoutApi =() => axios.delete("/api/auth/sign-out");
=======
import axios from "axios";

axios.defaults.baseURL = "https://sheltered-sea-54747.herokuapp.com/api";

export const createUser = (credentials) => {
  return axios.post("/auth/sign-up", credentials);
};
export const loginUser = (credentials) => {
  return axios.post("/auth/sign-in", credentials);
};
>>>>>>> 27cb7a41bea187c48b6d26a0dcf839bcc508026d
