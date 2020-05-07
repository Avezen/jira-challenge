import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export const headers = {
  authorization(sessionToken: any) {
    return {
      Authorization: `Bearer ${sessionToken}`
    };
  },
};

export const AppAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});


