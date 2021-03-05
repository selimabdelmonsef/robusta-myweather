import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import landingPage from './pages/landing-page/landing-page';
import weatherComponent from './components/weather-component/weather-component'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={landingPage} />
          <Route path="/weatherpage" component={weatherComponent} />
        </Switch>
      </Router >

    )
  }
}