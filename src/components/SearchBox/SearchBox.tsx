import {
  MagnifyingGlassIcon,
  MagnifyingGlassIconWrapper,
  SearchButton,
  SearchInput,
  SearchInputContainer,
  Wrapper,
} from './SearchBox.style';

const SearchBox = () => {
  return (
    <Wrapper>
      <SearchInputContainer>
        <MagnifyingGlassIconWrapper>
          <MagnifyingGlassIcon />
        </MagnifyingGlassIconWrapper>
        <SearchInput />
      </SearchInputContainer>
      <SearchButton>검색</SearchButton>
    </Wrapper>
  );
};

export default SearchBox;
