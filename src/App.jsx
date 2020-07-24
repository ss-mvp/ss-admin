import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { PromptPage, TopTenPage, Home, Video } from './pages';
import { PrivateRoute } from './utils'

function App() {
  return (
    <div className="maindiv">
      <Switch>
        <Route exact path="/" component={ Home } />
        <PrivateRoute path="/topten" component={ TopTenPage } />
        <PrivateRoute path="/prompts" component={ PromptPage } />
        <PrivateRoute path="/video" component={Video} />
      </Switch>
    </div>
  );
}

export default App;
