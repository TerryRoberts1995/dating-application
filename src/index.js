import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './/styles/index.css';
import App from './components/App';
import Home from './components/pages/Home'


ReactDOM.render(
  <BrowserRouter>
    <App />

    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);