import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor", props);
    this.state = {
      desc: '',
      items: props.initialState ? props.initialState.initialArray : []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(event) {
    this.setState({ desc: event.target.value });
  }

  onSubmit(event) {
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
        <form className="App">
          <input type="text" onChange={this.onChange}/>
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        <List items={this.state.items}></List>
      </div>
    );
  }

  // componentDidMount() {
  //
  //   console.log("CDM",this.props);
  //   this.setState({items: this.props.initialState});
  // }
}

export default App;
