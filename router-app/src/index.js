import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

export default function loadApplication(namespace) {
  console.log('loadApplication called');
  const container = document.getElementById(namespace);

  if(container !== null){
    ReactDOM.render(<App />, container);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
    console.log('application loaded');
  } else {
    console.log('react-app-root container not found');
  }
};

loadApplication('react-app-root');
