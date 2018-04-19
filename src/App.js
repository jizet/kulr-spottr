import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import createStore from './redux'
import Main from './containers/main'
import Game from './containers/game'
import Highscore from './containers/highscore'

const store = createStore()

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/highscore" component={Highscore} />
              <Route path="/board" component={Game} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
