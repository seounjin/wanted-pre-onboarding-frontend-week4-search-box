import React, { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import SearchList from './components/SearchList/SearchList';
import MainLayout from './layout/MainLayout/MainLayout';

function App() {
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        setCurrentSearchIndex((currentSearchIndex) => currentSearchIndex + 1);
        break;
      case 'ArrowUp':
        if (currentSearchIndex === 0) break;
        setCurrentSearchIndex((currentSearchIndex) => currentSearchIndex - 1);
        break;
      default:
        break;
    }
  };
  return (
    <MainLayout>
      <SearchBox handleKeyDown={handleKeyDown} />
      <SearchList currentSearchIndex={currentSearchIndex} />
    </MainLayout>
  );
}

export default App;
