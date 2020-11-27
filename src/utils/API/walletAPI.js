import axios from "axios";

axios.defaults.baseURL = "https://sheltered-sea-54747.herokuapp.com/api";

export const createUser = (credentials) => {
  return axios.post("/auth/sign-up", credentials);
};
export const loginUser = (credentials) => {
  return axios.post("/auth/sign-in", credentials);
};
