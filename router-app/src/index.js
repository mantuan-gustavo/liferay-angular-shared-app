import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import retargetEvents from 'react-shadow-dom-retarget-events';

function loadApplication(namespace) {
  console.log('loadApplication called');
  const container = document.getElementById(namespace);

  renderAppToContainer(container);
};

export default function renderAppToContainer(container, shadowRoot, initialState = {}){
  if(container !== undefined && container !== null){
    ReactDOM.render(<App initialState={initialState} />, container);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
    console.log('application loaded');
  } else {
    console.log('react-app-root container not found');
  }

  if(shadowRoot !== undefined && shadowRoot !== null) {
    retargetEvents(shadowRoot);
  }
}

loadApplication('react-app-root');
