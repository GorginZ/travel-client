import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Countries from './Countries'
import NoMatch from './NoMatch'
import Home from './Home'
import NavBar from './NavBar'
import CreateCountry from './CreateCountry'

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <Switch>
        <Route path="/countries" component={Countries} />
        <Route exact path="/" component={Home} />
        <Route exact path="/createCountry" component={CreateCountry} />
        <Route component={NoMatch} />
      </Switch>
      </>
    );
  }
}

export default App;
