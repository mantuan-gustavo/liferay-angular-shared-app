import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: '',
      items: []
    };
  }


  onChange = (event) => {
    this.setState({ desc: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

console.log(event);
    var newArray = this.state.items.slice();
    newArray.push(this.state.desc);
    this.setState({items:newArray});
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange}/>
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
