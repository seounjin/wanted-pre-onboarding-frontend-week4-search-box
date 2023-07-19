import { useEffect, useState } from 'react';

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
