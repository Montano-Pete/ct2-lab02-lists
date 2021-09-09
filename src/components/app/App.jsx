import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DetailPage from '../../containers/DetailsPage';
import ListPage from '../../containers/ListPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path="/"
          exact
          render={routerProps => <ListPage {...routerProps}/>}
        />
        <Route 
          path="/:villager"
          exact
          render={routerProps => <DetailPage {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}
