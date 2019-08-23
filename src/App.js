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
        {/* <Navbar /> */}
        <Route exact={true} path='/' component={HomePage}></Route>
        <Route path='/Login' component={Signin}></Route >
        <Route path='/register' component={SignUp}></Route>
        <Route path='/detail' component={Detail}></Route>
      </Router>
    </div >
  );
}

export default App;
