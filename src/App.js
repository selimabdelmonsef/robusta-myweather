import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import landingPage from './components/landing-page/landing-page';
import weatherPage from './components/weather-page/weather-page'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={landingPage} />
          <Route path="/weatherpage" component={weatherPage} />
        </Switch>
      </Router >

    )
  }
}