import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { PromptPage, TopTenPage } from './pages';

function App() {
  return (
    <div className="maindiv">
      <Switch>
        <Route path="/topten" component={ TopTenPage } />
        <Route path="/prompts" component={ PromptPage } />
      </Switch>
    </div>
  );
}

export default App;
