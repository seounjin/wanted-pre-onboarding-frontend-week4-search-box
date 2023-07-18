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
      console.log('캐시 있음');
      return cacheRes.data;
    }

    console.log('캐시 없음');

    const res = await axiosClient.get(url);
    console.info('calling api');

    const expireTime = currentTimeInSeconds + EXPIRE_TIME;
    await setCacheStorage(SEARCH_LIST, url, res.data, expireTime);

    return res.data;
  } catch (error) {
    console.log('getSearchList 에러', error);
  }
};
