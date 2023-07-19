import { BASE_URL, EXPIRE_TIME, SEARCH_LIST } from '../constants/const';
import {
  getCacheStorage,
  getCurrentTimeInSeconds,
  setCacheStorage,
} from '../utils/cacheStorage';
import { axiosClient } from './axiosClient';

export const getSearchList = async (value: string) => {
  try {
    const url = `${BASE_URL}/sick?q=${value}`;
    const currentTimeInSeconds = getCurrentTimeInSeconds();

    const cacheRes = await getCacheStorage(SEARCH_LIST, url);

    if (cacheRes && currentTimeInSeconds <= cacheRes.expireTime) {
      return cacheRes.data;
    }

    console.info('calling api');
    const res = await axiosClient.get(url);

    await setCacheStorage(SEARCH_LIST, url, res.data, EXPIRE_TIME);

    return res.data;
  } catch (error) {
    console.log('getSearchList 에러', error);
  }
};
