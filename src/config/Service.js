import axios from 'axios';

const Service = axios.create({
  baseURL : `https://bis-api.herokuapp.com/user`,
  // baseURL : `http://localhost:5000/user`,
  validateStatus : function (status) {
    return status >= 200 && status < 300;
  },
  withCredentials : true,
  headers: {'Connection': 'keep-alive'}
});

export default Service;