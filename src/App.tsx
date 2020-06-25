import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/work' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
