import React from 'react';
import { Router } from 'components/Router';
import Home from 'pages/index';
import NotFound from 'pages/404';
import './app.css';

const App = () =>{
  return (
    <Router>
      <Home path="/" />
      <NotFound default />
    </Router>
  )
}

export default App;
