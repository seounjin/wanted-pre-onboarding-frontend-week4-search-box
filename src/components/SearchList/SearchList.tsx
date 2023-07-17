import { MagnifyingGlassIcon } from '../SearchBox/SearchBox.style';
import {
  ListItem,
  ListWrapper,
  Title,
  Wrapper,
  Text,
} from './SearchList.style';

const dummyData = [
  { text: '안녕' },
  { text: '안녕' },
  { text: '안녕' },
  { text: '안녕' },
  { text: '안녕' },
];

interface SearchListProps {
  currentSearchIndex: number;
}

const SearchList = ({ currentSearchIndex }: SearchListProps) => {
  return (
    <Wrapper>
      <Title>추천 검색어</Title>
      <ListWrapper>
        {dummyData.map((_, index) => (
          <ListItem
            key={`l${index}`}
            $isCurrentIndex={currentSearchIndex === index}
          >
            <MagnifyingGlassIcon />
            <Text>안녕</Text>
          </ListItem>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default SearchList;
