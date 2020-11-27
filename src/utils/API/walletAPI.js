import axios from 'axios';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com'


export const addTransactionApi = (transaction) => axios.post("api/transactions", transaction);