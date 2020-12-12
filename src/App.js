import React from 'react';
import { BrowserRouter, Switch, Route } from 'components/Router';
import Home from 'pages/index';
import NotFound from 'pages/404';
import './app.css';

const App = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resume.html" onEnter={() => window.location.reload()} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
