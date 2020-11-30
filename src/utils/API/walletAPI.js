import axios from "axios";

axios.defaults.baseURL = "https://sheltered-sea-54747.herokuapp.com/api";

// axios.defaults.headers.common.Authorization =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJhOGM2NTcxZS1lYzg0LTRiNmEtYWExYS02YjhkMzM0Zjg1YjEiLCJpYXQiOjE2MDY0ODU5OTcsImV4cCI6MTAwMDAwMDE2MDY0ODU5OTZ9.pnhMJR_MCVfMcleGcvFirmGI2Y5_2qb1GBH8BdFK-D0";

export const addTransactionApi = (transaction) =>
  axios.post("/transactions", transaction);

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
export const getCurrentUserApi = () => {
  return axios.get("/users/current");
};
