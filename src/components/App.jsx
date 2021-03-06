import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Countries from './Countries'
import NoMatch from './NoMatch'
import Home from './Home'
import NavBar from './NavBar'
import CreateCountry from './CreateCountry'
import EditCountry from './EditCountry'
import Login from "./Login";
import SignUp from "./SignUp";

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <Switch>
        <Route exact path="/countries/:id/edit" component={EditCountry} /> 
        <Route exact path="/countries/create" component={CreateCountry} />
        <Route exact path="/countries" component={Countries} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      </>
    );
  }
}

export default App;
