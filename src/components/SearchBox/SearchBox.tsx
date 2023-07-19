import React from 'react';
import {
  Container,
  MagnifyingGlassIcon,
  MagnifyingGlassIconWrapper,
  SearchButton,
  SearchInput,
  SearchInputContainer,
  Wrapper,
} from './SearchBox.style';

interface SearchBoxProps {
  children: React.ReactNode;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputBlur: () => void;
  handleSearchInputfocus: () => void;
}

const SearchBox = ({
  children,
  handleKeyDown,
  handleSearchInputChange,
  handleSearchInputBlur,
  handleSearchInputfocus,
}: SearchBoxProps) => {
  return (
    <Wrapper>
      <Container>
        <SearchInputContainer>
          <MagnifyingGlassIconWrapper>
            <MagnifyingGlassIcon />
          </MagnifyingGlassIconWrapper>
          <SearchInput
            onKeyDown={handleKeyDown}
            onChange={handleSearchInputChange}
            onFocus={handleSearchInputfocus}
            onBlur={handleSearchInputBlur}
          />
        </SearchInputContainer>
        <SearchButton>검색</SearchButton>
      </Container>
      {children}
    </Wrapper>
  );
};

export default SearchBox;
