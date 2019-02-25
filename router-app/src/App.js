import React, { Component } from 'react';
import { HashRouter, MemoryRouter, Route, Link } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import TeamComponent from './components/TeamComponent';
import HeaderComponent from './components/HeaderComponent';

class App extends Component {
  render() {
    return (
      <MemoryRouter>

          <div>
            <HeaderComponent></HeaderComponent>

            <Route exact path='/' component={HomeComponent}></Route>
            <Route exact path='/about' component={AboutComponent}></Route>
            <Route exact path='/team' component={TeamComponent}></Route>
          </div>
    
      </MemoryRouter>
    );
  }
}

export default App;
