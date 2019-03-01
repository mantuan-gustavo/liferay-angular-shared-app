import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {MemoryRouter as Router} from 'react-router';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import TeamComponent from './components/TeamComponent';
import HeaderComponent from './components/HeaderComponent';

import {createMemoryHistory} from 'history';

const history = createMemoryHistory();

class App extends Component {
  constructor(props) {
    super(props);



    this.state = {
      page: 'home',
      value: ''
    };

    this.textInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
  }

  onClickLink(pageSelected) {
    console.log(pageSelected);
    this.setState({
      page: pageSelected
    });
  }

  renderComponent() {
      if(this.state.page === 'home') {
        return <HomeComponent/>
      }
      else if(this.state.page === 'about') {
        return <AboutComponent/>
      }
      else if(this.state.page === 'team') {
        return <TeamComponent/>
      }
      return <TeamComponent/>
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ value: this.textInput.current.value})
  };

  render() {
    return (
      <div>
        <HeaderComponent onClickLink={this.onClickLink}/>


          <a type="link" href="#" onClick={() => this.onClickLink('team') }> Team </a>

        {this.renderComponent()}

        <div>
          <h1>React Ref - createRef</h1>
          <h3>Value: {this.state.value}</h3>
          <form >
            <input type="text" ref={this.textInput} />
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
