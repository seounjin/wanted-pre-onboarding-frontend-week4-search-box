import SearchBox from './components/SearchBox/SearchBox';
import SearchList from './components/SearchList/SearchList';
import MainLayout from './layout/MainLayout/MainLayout';

function App() {
  return (
    <MainLayout>
      <SearchBox></SearchBox>
      <SearchList></SearchList>
    </MainLayout>
  );
}

export default App;
