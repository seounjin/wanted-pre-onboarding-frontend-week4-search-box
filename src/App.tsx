import React, { useEffect, useState } from 'react';
import { getSearchList } from './api/searchApi';
import SearchBox from './components/SearchBox/SearchBox';
import SearchList from './components/SearchList/SearchList';
import { SearchListType } from './components/SearchList/SearchList.type';
import { MAX_SEARCH_LIST_LENGTH } from './constants/const';
import useDebounce from './hooks/useDebounce ';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import MainLayout from './layout/MainLayout/MainLayout';

function App() {
  const [searchList, setSearchList] = useState<SearchListType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const { debouncedSearchValue } = useDebounce(searchValue, 150);
  const { currentSearchIndex, setCurrentSearchIndex, handleKeyDown } =
    useKeyboardNavigation({
      maxIndex: setSearchList.length,
    });

  const handleSearchBoxInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const fetchSearchList = async (value: string) => {
    const data = await getSearchList(value);
    const sliceData =
      data.length >= MAX_SEARCH_LIST_LENGTH
        ? data.slice(0, MAX_SEARCH_LIST_LENGTH)
        : data;
    setSearchList(sliceData);
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
          searchValue={debouncedSearchValue}
        />
      </SearchBox>
    </MainLayout>
  );
}

export default App;
