import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './/styles/index.css';
import App from './components/App';
import Home from './components/pages/Home';
import SignUp from "./components/pages/sign-up"
import SignIn from './components/pages/sign-in'

ReactDOM.render(  
  <BrowserRouter>  
    <App />

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);