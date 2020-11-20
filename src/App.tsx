import './App.css';
import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import { Switch, Route } from "react-router-dom";
import Fetching from './components/Fetching'
import Reservations from './components/reservations/Reservations'
import Reservation from './components/reservations/Reservation'
import Inscriptions from './components/inscriptions/Inscriptions'
import Inscription from './components/inscriptions/Inscription'
import Accueil from './components/Accueil'
import Prestations from './components/prestation/prestations'

interface IRecipeProps {
}

interface IRecipeState {
  fetching: boolean;
}
class App extends Component<IRecipeProps, IRecipeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fetching: false
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fetching ? <Fetching /> : null}
          <Toolbar />
          <br/>
          <br/>
          <br/>
          <div className="container">
          <Switch>
            <Route exact path="/inscriptions" render={(props) => (
              <Inscriptions {...props} onFetching={this.showfetching}/>
            )}>
            </Route>
            <Route exact path="/inscription" render={(props) => (
              <Inscription {...props} onFetching={this.showfetching}/>
            )}>
            </Route>
            <Route exact path="/reservations" render={(props) => (
              <Reservations {...props} onFetching={this.showfetching}/>
            )}>
            </Route>
            <Route exact path="/reservation" render={(props) => (
              <Reservation {...props} onFetching={this.showfetching}/>
            )}>
            </Route>
            <Route exact path="/prestations" render={(props) => (
              <Prestations {...props} onFetching={this.showfetching}/>
            )}>
            </Route>
            <Route exact path="/" render={(props) => (
              <Accueil {...props} />
            )}>
            </Route>
          </Switch>
        </div>

      </React.Fragment>
    );
  }

  showfetching = (fetching:boolean) => {
    this.setState((prevState, props) => {
    return ({ fetching: fetching })
  })
  }

  componentDidMount() {
  }

}

export default App;
