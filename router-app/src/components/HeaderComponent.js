import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function HeaderComponent (props){
  function click(page = 'none') {
    console.log('CLICKED::', page);
  }

  return (
    <ul>
      <li>
        <a type="link" data-senna-off="true" rel="nofollow" name="home_component" id="home_component" href="#" onClick={() => click('home Component')}> Home </a>
      </li>
      <li>
        <a type="link" data-senna-off="true" rel="nofoolow" href="#" name="about_component" id="about_component" onClick={() =>click('about Component')}> About </a>
      </li>

    </ul>
  )
}

export default HeaderComponent;
