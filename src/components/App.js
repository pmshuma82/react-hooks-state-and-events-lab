import React, { useState } from 'react';
import ShoppingList from './ShoppingList';

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${mode}`}>
      <button onClick={toggleMode}>Toggle Mode</button>
      <ShoppingList />
    </div>
  );
};

export default App;

