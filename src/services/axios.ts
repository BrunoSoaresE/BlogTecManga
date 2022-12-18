import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { 'blogtecmanga.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.API_UR
  })

  /*api.interceptors.request.use(config => {
    console.log(config);
    return config;
  })*/

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}