# 원티드 프론트엔드 인턴십 4주차 과제
<br />

## 과제설명
한국임상정보 페이지의 검색기능을 클론코딩하는 과제 입니다.

<br />

## 실행방법

프론트
```
$ npm install
$ npm run start
```
백엔드

https://github.com/walking-sunset/assignment-api
```
$ npm install
$ npm run start
```

<br />

## 실행 화면
<table align="center">
  <tr>
    <td align="center" width="720px"><img src="https://user-images.githubusercontent.com/39517396/254534374-a6ddf9fb-daa7-4cc1-a293-4a61e44adcc9.gif" /></td>
  </tr>
</table>

<br />

## 기능 구현


### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- 검색창에 keydown 이벤트 설정과 검색리스트 index를 상태값으로 관리하였습니다.
- 키보드 위 아래 이동시 선택된 항목의 인덱스를 증가 혹은 감소시키는 방식으로 추천검색어를 이동하도록 구현하였습니다.

</br>

**useKeyboardNavigation**
```tsx
const useKeyboardNavigation = ({ maxIndex }: { maxIndex: number }) => {
  const [currentSearchIndex, setCurrentSearchIndex] = useState<number>(0);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        if (currentSearchIndex > maxIndex - 2) break;
        setCurrentSearchIndex((currentSearchIndex) => currentSearchIndex + 1);
        break;
      case 'ArrowUp':
        if (currentSearchIndex === 0) break;
        setCurrentSearchIndex((currentSearchIndex) => currentSearchIndex - 1);
        break;
      default:
        break;
    }
  };

  return { currentSearchIndex, setCurrentSearchIndex, handleKeyDown };
};

export default useKeyboardNavigation;
```
<br />

<div align="center">

### 키보드로 추천 검색어 이동 화면

</div>
  
<table align="center">
  <tr>
    <td align="center" width="720px"><img src="https://user-images.githubusercontent.com/39517396/254534385-031547c5-0957-423a-83ae-52c47c4bf985.gif" /></td>
  </tr>
</table>

<br />


### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- 디바운스 기법을 적용하여 연속적으로 발생하는 함수 호출 중 마지막 함수 호출만 수행하게 하였습니다.
- 사용자가 검색창에 검색어를 연속으로 입력할때, 입력이 끝난 후에만 최종적으로 입력한 검색어를 API요청을 하여 API 호출 횟수를 줄였습니다.

<br />


**useDebounce**

```tsx
const useDebounce = (searchValue: string, delay: number) => {
  const [debouncedSearchValue, setDebouncedSearchValue] =
    useState<string>(searchValue);

  useEffect(() => {
    const debounceFunc = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, delay);

    return () => clearTimeout(debounceFunc);
  }, [searchValue]);

  return { debouncedSearchValue };
};

export default useDebounce;
```

<br/>

### API 호출별로 로컬 캐싱 구현

**Cache Storage를 사용하여 로컬캐싱기능을 구현하였습니다.**

- Cache Storage에 요청할 API 리소스가 있다면 해당 리소스를 리턴합니다.
- 없을경우 API요청후 해당 리소스를 Cache Storage에 저장합니다.

**expire time 구현**

- 현재 시간을 초로 계산한 currentTimeInSeconds 에 사용자가 원하는 EXPIRE_TIME을 더하여

Cache Storage에 저장합니다.

- 해당 API 요청 리소스가 있을때 현재시간을 비교하여 expire time이 유효하다면  리소르를 리턴 합니다.

<br />

**cacheStorage**

```tsx
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
```

**Local Storage대신 Cache Storage를 사용한 이유**

- Local Storage는 동기적으로 작업이 완료되지 않았다면 멈추게 됩니다. 반복적인 데이터 요청이 발생하는 경우 성능 저하가 발생할 수 있습니다.
- 반면 Cache Storage는 비동기적으로 작업을 수행하기 때문에 자동완성검색기능과 같은 여러번의 API 함수 요청이 발생하는 상황에서 성능에 최적화라고 판단하였습니다.

<br />

<div align="center">
  
### API 호출 Console.info 화면

</div>

<table align="center">
  <tr>
    <td align="center" width="720px"><img src="https://user-images.githubusercontent.com/39517396/254534391-4042831e-5bc2-4c24-a4bd-f42abd3964d7.gif" /></td>
  </tr>
</table>
