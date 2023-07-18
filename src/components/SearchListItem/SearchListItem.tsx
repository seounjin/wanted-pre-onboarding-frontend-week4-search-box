import { MagnifyingGlassIcon } from '../SearchBox/SearchBox.style';
import {
  Wrapper,
  Text,
  MagnifyingGlassIconWrapper,
} from './SearchListItem.style';

interface SearchListItemProps {
  text: string;
  isActive?: boolean;
}

const SearchListItem = ({ text, isActive = false }: SearchListItemProps) => {
  return (
    <Wrapper $isActive={isActive}>
      <MagnifyingGlassIconWrapper>
        <MagnifyingGlassIcon />
      </MagnifyingGlassIconWrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default SearchListItem;
