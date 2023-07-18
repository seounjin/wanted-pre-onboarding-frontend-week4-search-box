import React, { useEffect, useState } from 'react';
import { getSearchList } from './api/searchApi';
import SearchBox from './components/SearchBox/SearchBox';
import SearchList from './components/SearchList/SearchList';
import { SearchListType } from './components/SearchList/SearchList.type';
import useDebounce from './hooks/useDebounce ';
import MainLayout from './layout/MainLayout/MainLayout';

function App() {
  const [currentSearchIndex, setCurrentSearchIndex] = useState<number>(0);
  const [searchList, setSearchList] = useState<SearchListType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const { debouncedSearchValue } = useDebounce(searchValue);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        if (currentSearchIndex > searchList.length - 2) break;
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

  const handleSearchBoxInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const fetchSearchList = async (value: string) => {
    console.log('value', value);
    const data = await getSearchList(value);
    console.log('res', data);
    setSearchList(data);
  };

  useEffect(() => {
    if (debouncedSearchValue.length) {
      setCurrentSearchIndex(0);
      fetchSearchList(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  return (
    <MainLayout>
      <SearchBox
        handleKeyDown={handleKeyDown}
        handleSearchBoxInput={handleSearchBoxInput}
      >
        <SearchList
          searchList={searchList}
          currentSearchIndex={currentSearchIndex}
          searchValue={searchValue}
        />
      </SearchBox>
    </MainLayout>
  );
}

export default App;
