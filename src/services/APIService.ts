import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { history } from '../utils/history';


export const AppAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});


