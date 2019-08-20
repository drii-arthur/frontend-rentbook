import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Signin from './pages/Login'
import SignUp from './pages/register'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Route path='/Login' component={Signin}></Route >
        <Route path='/register' component={SignUp}></Route>
      </Router>
    </div >
  );
}

export default App;
