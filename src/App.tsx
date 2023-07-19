import { useEffect, useState } from 'react';
import { getSearchList } from './api/searchApi';
import SearchBox from './components/SearchBox/SearchBox';
import SearchList from './components/SearchList/SearchList';
import { SearchListType } from './components/SearchList/SearchList.type';
import { MAX_SEARCH_LIST_LENGTH } from './constants/const';
import useDebounce from './hooks/useDebounce ';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import useSearchInput from './hooks/useSearchInput';
import MainLayout from './layout/MainLayout/MainLayout';

function App() {
  const [searchList, setSearchList] = useState<SearchListType[]>([]);
  const {
    searchValue,
    isSearchListVisible,
    handleSearchInputChange,
    handleSearchInputBlur,
    handleSearchInputfocus,
  } = useSearchInput();
  const { debouncedSearchValue } = useDebounce(searchValue, 150);
  const { currentSearchIndex, setCurrentSearchIndex, handleKeyDown } =
    useKeyboardNavigation({
      maxIndex: searchList.length,
    });

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
        handleSearchInputChange={handleSearchInputChange}
        handleSearchInputBlur={handleSearchInputBlur}
        handleSearchInputfocus={handleSearchInputfocus}
      >
        {isSearchListVisible && (
          <SearchList
            searchList={searchList}
            currentSearchIndex={currentSearchIndex}
            searchValue={debouncedSearchValue}
          />
        )}
      </SearchBox>
    </MainLayout>
  );
}

export default App;
