import axios from 'axios';

const Service = axios.create({
  baseURL : `https://bis-api.herokuapp.com/user`,
  validateStatus : function (status) {
    return status >= 200 && status < 300;
  },
  withCredentials : true,
});

export default Service;