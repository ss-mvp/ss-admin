import axios from 'axios';

export const AxiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    // baseURL: 'https://ss-mvp.herokuapp.com/',
    baseURL: 'http://localhost:5000/',
    headers: {
      Authorization: token,
    },
  });
};
