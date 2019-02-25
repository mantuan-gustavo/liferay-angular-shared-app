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

    return (
      <div className="container theme-showcase">
        <NavBar counter={counter} />
        {React.cloneElement(this.props.children, { ...this.state })}
      </div>
    );
  }
}

const history = createMemoryHistory("/");

const router = (
  <Router history={history}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="json" component={Json} />
      <Route path="login" component={Login} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
);

export default function loadApplication(namespace) {
  const container = document.getElementById(namespace);

  if(container !== null){
    render(router, container);
    console.log('application loaded');
  } else {
    console.log('app-root container not found');
  }
};

loadApplication('app-react');
