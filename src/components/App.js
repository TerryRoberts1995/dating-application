import React from 'react'
import { useRoutes } from "hookrouter";
import Nav from './Navigation/Nav'
import '../styles/App.css';
import Home from '../components/pages/Home'
import SignIn from '../components/pages/sign-in'

function App() {
  const routes = {
    "/": () => <SignIn />,
    "/Home": () => <Home />
  };
  return (
    
    <div className="App">
      <Nav />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
