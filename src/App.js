import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/homePage'
import Signin from './pages/Login'
import SignUp from './pages/register'
import Detail from './pages/detail'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path='/' component={HomePage}></Route>
        <Route path='/Login' component={Signin}></Route >
        <Route path='/register' component={SignUp}></Route>
        <Route exact={true} path='/book/detail/:id' component={Detail}></Route>
        <Route path='/book/genre/:genre' component={HomePage}></Route>
        <Route path='/book/year/:year' component={HomePage}></Route>
      </Router>
    </div >
  );
}

export default App;
