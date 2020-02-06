import axios from 'axios';

const Service = axios.create({
  baseURL : 'http://localhost:5000/user',
  validateStatus : function (status) {
    return status >= 200 && status < 300;
  },
});

export default Service;