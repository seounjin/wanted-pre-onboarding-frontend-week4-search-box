import { ReactNode } from 'react';
import { Title, Wrapper } from './MainLayout.style';
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>
      {children}
    </Wrapper>
  );
};

export default MainLayout;
