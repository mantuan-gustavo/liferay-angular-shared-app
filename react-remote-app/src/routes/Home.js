import React, { PropTypes } from 'react';
import Intent from '../intent/Counter-intent';

const Home = ({counter}) => {
  const handleIncrement = () => { Intent.incrementCounter(); };

  const handleDecrease = () => { Intent.decreaseCounter(); };

  return (
    <div className="jumbotron text-center">
      <h1>Welcome to ReactJS and Liferay Inc</h1>
      <p>This is a template showcasing how we can pass data from Liferay Backend to ReactJS Portlet Application </p>
      <p>
        User Object: {initialState ? initialState.initialText: ''}
        {counter}
      </p>
      <div className="center-block text-center">
        <h1>counter: {counter}</h1>
        <button className="btn btn-lg btn-primary" onClick={handleDecrease}>decrease</button>
           {'  '}
        <button className="btn btn-lg btn-primary" onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default Home;
