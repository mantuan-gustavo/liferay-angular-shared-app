import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Json from './routes/Json';
import NavBar from './components/navbar';
import { default as Model } from './models/State-model';
import { Router, Route, IndexRoute, browserHistory, Redirect, createMemoryHistory } from 'react-router';

class Root extends Component {
  
  componentDidMount() {
    Model.subject.subscribe(appState => {
      this.setState({ ...appState });
    });
  }

  render() {
    const { counter } = this.state || {};
    console.log(this.props);

    return (
      <div className="container theme-showcase">
        <NavBar counter={counter} />
        {this.props.children}
      </div>
    );
  }
}

const history = browserHistory;

let props1 = {
  text: 'aaaa',
  test: 'nnnn'
}

const router =(
   <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute render={() => (<Home {...props1} />) }/>
        <Route path="about" component={About}   />
        <Route path="json" component={Json} />
        <Route path="login" component={Login} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  );

function loadApplication(namespace) {
  const container = document.getElementById(namespace);

  if(container !== null){
    render(router, container);
    console.log('application loaded');
  } else {
    console.log('app-root container not found');
  }
};

export default function renderAppToContainer(container, shadowRoot, initialState = {}){
  if(container !== undefined && container !== null){
    render(
      <Router history={history}>
      <Route path="/" component={Root}>
      <IndexRoute children={() => <Home {...initialState} /> } />
       
        <Route path="about" component={About}/>
        <Route path="json" component={Json} />
        <Route path="login" component={Login} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
      , container)

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    console.log('application loaded');
  } else {
    console.log('react-app-root container not found');
  }

  if(shadowRoot !== undefined && shadowRoot !== null) {
    retargetEvents(shadowRoot);
  }
}

loadApplication('app-react');
