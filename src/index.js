import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './/styles/index.css';
import App from './components/App';
import Home from './components/pages/Home'
import SignIn from './components/pages/sign-in'


ReactDOM.render(  
  <BrowserRouter>  
    <App />

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/sign-in' component={SignIn} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);