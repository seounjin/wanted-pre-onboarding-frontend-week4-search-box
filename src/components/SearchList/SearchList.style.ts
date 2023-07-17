import { styled } from 'styled-components';

interface ListItemProps {
  $isCurrentIndex: boolean;
}

export const Wrapper = styled.div`
  background-color: #fff;
  width: 650px;
  padding: 30px;
  border-radius: 22px;
  font-size: 18px;
`;

export const Title = styled.h5`
  color: #808080;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background-color: ${(props) => (props.$isCurrentIndex ? '#f5f5f5' : 'none')};
`;

export const Text = styled.span``;
