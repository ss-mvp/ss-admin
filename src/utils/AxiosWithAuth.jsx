import axios from 'axios';
import { token } from '.';

const baseURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000';

export const AxiosWithAuth = () => {
  const t = token.get();
  return axios.create({
    baseURL,
    headers: {
      Authorization: t,
    },
  });
};
