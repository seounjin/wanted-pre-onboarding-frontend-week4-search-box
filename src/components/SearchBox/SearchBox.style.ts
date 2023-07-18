import { styled } from 'styled-components';
import { ReactComponent as MagnifyingGlassSvgIcon } from '../../Icons/MagnifyingGlass.svg';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  width: 650px;
  height: 74px;

  background-color: #fff;
  border-radius: 42px;
  overflow: hidden;

  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;

  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const SearchButton = styled.button`
  width: 90px;
  height: 74px;

  color: #fff;
  background-color: #007be9;
  border: none;
  font-size: 18px;
  font-weight: bold;
`;

export const MagnifyingGlassIconWrapper = styled.div`
  padding-left: 24px;
  padding-right: 10px;
`;

export const MagnifyingGlassIcon = styled(MagnifyingGlassSvgIcon)`
  width: 18px;
  height: 18px;
  color: #000;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
