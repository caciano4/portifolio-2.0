import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);
