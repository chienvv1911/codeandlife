var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://localhost:3002/',
});

module.exports = axiosInstance;
