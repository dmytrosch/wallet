import axios from "axios";

axios.defaults.baseURL = "https://sheltered-sea-54747.herokuapp.com/api";

export const createUser = (credentials) => {
  return axios.post("/auth/sign-up", credentials);
};
export const loginUser = (credentials) => {
  return axios.post("/auth/sign-in", credentials);
};
export const logoutApi = () => axios.delete("/auth/sign-out");
export const loadTransactions = () => {
  return axios.get("/transactions");
};
export const loadCategories = () => {
  return axios.get("/transaction-categories");
};
export const currentUser = () => {
  return axios.post('/api/users/current');
};