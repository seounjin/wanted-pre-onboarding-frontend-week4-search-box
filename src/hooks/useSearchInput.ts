import { useState, ChangeEvent } from 'react';

const useSearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchInputBlur = () => {
    setIsSearchListVisible(false);
  };

  const handleSearchInputfocus = () => {
    setIsSearchListVisible(true);
  };
  return {
    searchValue,
    isSearchListVisible,
    handleSearchInputChange,
    handleSearchInputBlur,
    handleSearchInputfocus,
  };
};

export default useSearchInput;
