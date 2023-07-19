import React, { useState } from 'react';

const useKeyboardNavigation = ({ maxIndex }: { maxIndex: number }) => {
  const [currentSearchIndex, setCurrentSearchIndex] = useState<number>(0);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        if (currentSearchIndex > maxIndex - 2) break;
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

  return { currentSearchIndex, setCurrentSearchIndex, handleKeyDown };
};

export default useKeyboardNavigation;
