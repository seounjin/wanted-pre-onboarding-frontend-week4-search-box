import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  background-color: #fff;
  width: 650px;
  padding: 30px;
  border-radius: 22px;
  font-size: 18px;

  margin-top: 20px;

  overflow-y: auto;
  max-height: 400px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h5`
  color: #808080;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const SearchListItemContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SearchListItemWrapper = styled.li`
  width: 100%;
`;

export const Text = styled.span``;
