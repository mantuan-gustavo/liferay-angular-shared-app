import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const NavBar = ({ counter }) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand"  data-senna-off="true" to="/">React RxJS</Link>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/" data-senna-off="true">Home</Link></li>
          <li><Link to="/about" data-senna-off="true" onlyActiveOnIndex={false}>About</Link></li>
          <li><Link to="/json" data-senna-off="true" onlyActiveOnIndex={false}>Json</Link></li>
          <li><Link to="/login" data-senna-off="true" onlyActiveOnIndex={false}>Login</Link></li>
        </ul>
        <button className="btn btn-default navbar-btn">counter: {counter}</button>
           {'  '}
        <a  data-senna-off="true" href="https://github.com/Cmdv/React-RxJS/archive/master.zip" className="btn btn-default navbar-btn">
          <span className="glyphicon glyphicon-download-alt" /> Download zip
        </a>
           {'  '}
        <a  data-senna-off="true" href="https://github.com/Cmdv/React-RxJS" className="btn btn-default navbar-btn">GitHub</a>
      </div>
    </div>
  </nav>
);

export default NavBar;
