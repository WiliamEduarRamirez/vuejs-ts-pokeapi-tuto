import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

const request = {
  getParams: (url: string, params: URLSearchParams) =>
    axios.get(url, { params }),
  get: (url: string) => axios.get(url),
};

export default request;
