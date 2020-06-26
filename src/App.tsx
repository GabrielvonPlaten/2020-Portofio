import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Work } from './Components/Work/Work';

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Work />
    </div>
  );
};

export default App;
