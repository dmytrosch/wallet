import axios from "axios";

const token = {
  set(tokenValue) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export default {};
