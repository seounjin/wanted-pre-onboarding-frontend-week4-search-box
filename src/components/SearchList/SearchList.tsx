import { MagnifyingGlassIcon } from '../SearchBox/SearchBox.style';
import {
  ListItem,
  ListWrapper,
  Title,
  Wrapper,
  Text,
} from './SearchList.style';

const SearchList = () => {
  return (
    <Wrapper>
      <Title>추천 검색어</Title>
      <ListWrapper>
        <ListItem>
          <MagnifyingGlassIcon />
          <Text>안녕</Text>
        </ListItem>
        <ListItem>
          <MagnifyingGlassIcon />
          <Text>안녕</Text>
        </ListItem>
        <ListItem>
          <MagnifyingGlassIcon />
          <Text>안녕</Text>
        </ListItem>
        <ListItem>
          <MagnifyingGlassIcon />
          <Text>안녕</Text>
        </ListItem>
      </ListWrapper>
    </Wrapper>
  );
};

export default SearchList;
