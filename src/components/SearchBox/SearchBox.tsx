import React from 'react';
import {
  MagnifyingGlassIcon,
  MagnifyingGlassIconWrapper,
  SearchButton,
  SearchInput,
  SearchInputContainer,
  Wrapper,
} from './SearchBox.style';

interface SearchBoxProps {
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ handleKeyDown }: SearchBoxProps) => {
  return (
    <Wrapper>
      <SearchInputContainer>
        <MagnifyingGlassIconWrapper>
          <MagnifyingGlassIcon />
        </MagnifyingGlassIconWrapper>
        <SearchInput onKeyDown={handleKeyDown} />
      </SearchInputContainer>
      <SearchButton>검색</SearchButton>
    </Wrapper>
  );
};

export default SearchBox;
