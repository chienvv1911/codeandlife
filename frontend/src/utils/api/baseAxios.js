var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://localhost:3002/api/',
});

module.exports = axiosInstance;
