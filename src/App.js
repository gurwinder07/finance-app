import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

import Main from './Components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
