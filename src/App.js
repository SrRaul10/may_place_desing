import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './users/pages/User';
import Places from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation>
        <main>
          <Switch>
            <Route path="/" exact>
              <Users></Users>
            </Route>
            <Route path="/places/new" exact>
              <Places></Places>
            </Route>
            <Redirect to='/'></Redirect>
          </Switch>
        </main>
        </MainNavigation>
    </Router>
  );
}

export default App;
