import { useEffect, useState } from 'react';

const useDebounce = (searchValue: string) => {
  const [debouncedSearchValue, setDebouncedSearchValue] =
    useState<string>(searchValue);

  useEffect(() => {
    const debounceFunc = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => clearTimeout(debounceFunc);
  }, [searchValue]);

  return { debouncedSearchValue };
};

export default useDebounce;
