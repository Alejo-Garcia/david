import axios from 'axios';
import {configure} from 'axios-hooks';

export const initializeAxios = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
  });

  configure({axios: axiosInstance});
};
