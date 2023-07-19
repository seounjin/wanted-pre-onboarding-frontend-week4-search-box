import { styled } from 'styled-components';

interface WrapperProps {
  $isActive?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background-color: ${(props) => (props.$isActive ? '#f5f5f5' : 'none')};
`;

export const Text = styled.span`
  white-space: break-spaces;
  word-break: break-word;
`;

export const MagnifyingGlassIconWrapper = styled.div`
  padding-top: 4px;
`;
