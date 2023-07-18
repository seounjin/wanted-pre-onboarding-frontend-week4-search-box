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
  handleSearchBoxInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  children,
  handleKeyDown,
  handleSearchBoxInput,
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
            onChange={handleSearchBoxInput}
          />
        </SearchInputContainer>
        <SearchButton>검색</SearchButton>
      </Container>
      {children}
    </Wrapper>
  );
};

export default SearchBox;
