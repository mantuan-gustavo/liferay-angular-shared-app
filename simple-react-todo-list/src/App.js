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
        <h1>Welcome to ReactJS + Liferay Portlet</h1>
       
        <p>The entire User Object:
          <br/>
          <code>
          {this.props.user ? JSON.stringify(this.props.user) : "No user loaded"}
          </code>
          </p>
        <p>
          The user first name: {this.props.user ? this.props.user.serializable.firstName : "No user loaded"}
        </p>
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
