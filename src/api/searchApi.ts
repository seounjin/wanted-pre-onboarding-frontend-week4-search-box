import { axiosClient } from './axiosClient';

export const getSearchList = async (value: string) => {
  try {
    const res = await axiosClient.get(`/sick?q=${value}`);
    return res.data;
  } catch (error) {
    console.log('에러', error);
  }
};
