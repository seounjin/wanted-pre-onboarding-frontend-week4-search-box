export const getCacheStorage = async (name: string, url: string) => {
  try {
    const cacheStorage = await caches.open(name);
    const res = await cacheStorage.match(url);

    if (!res) return;
    return res.json();
  } catch (error) {
    console.log('getCacheStorage 에러', error);
  }
};

export const setCacheStorage = async (
  name: string,
  url: string,
  data: any,
  expireTime: number
) => {
  try {
    const currentTimeInSeconds = getCurrentTimeInSeconds();

    const cacheStorage = await caches.open(name);

    await cacheStorage.put(
      url,
      new Response(
        JSON.stringify({ data, expireTime: currentTimeInSeconds + expireTime })
      )
    );
  } catch (error) {
    console.log('setCacheStorage 에러', error);
  }
};

export const getCurrentTimeInSeconds = () => Math.floor(Date.now() / 1000);
