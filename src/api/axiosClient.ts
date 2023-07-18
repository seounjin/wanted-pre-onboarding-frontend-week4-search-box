import axios from 'axios';
import { BASE_URL } from '../constants/const';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});
