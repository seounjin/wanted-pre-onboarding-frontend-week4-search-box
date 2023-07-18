import SearchListItem from '../SearchListItem/SearchListItem';
import {
  SearchListItemWrapper,
  SearchListItemContainer,
  Title,
  Wrapper,
  Text,
} from './SearchList.style';
import { SearchListType } from './SearchList.type';

interface SearchListProps {
  searchList: SearchListType[];
  currentSearchIndex: number;
  searchValue: string;
}

const SearchList = ({
  searchList,
  currentSearchIndex,
  searchValue,
}: SearchListProps) => {
  return (
    <Wrapper>
      {searchValue.length ? (
        <SearchListItem text={searchValue} />
      ) : (
        <Text>검색어가 없습니다</Text>
      )}
      {searchValue.length > 0 && searchList.length > 0 && (
        <>
          <Title>추천 검색어</Title>
          <SearchListItemContainer>
            {searchList.map(({ sickCd, sickNm }, index) => (
              <SearchListItemWrapper key={sickCd}>
                <SearchListItem
                  text={sickNm}
                  isActive={currentSearchIndex === index}
                />
              </SearchListItemWrapper>
            ))}
          </SearchListItemContainer>
        </>
      )}
    </Wrapper>
  );
};

export default SearchList;
