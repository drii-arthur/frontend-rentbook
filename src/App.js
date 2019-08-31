import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import store from './Redux/store'
import { Provider } from 'react-redux'

import HomePage from './pages/homePage'
import Signin from './pages/Login'
import SignUp from './pages/register'
import Detail from './pages/detail'
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Provider store={store}>
          <Route exact={true} path='/'
            render={() => {
              return window.localStorage.getItem('token') !== null || window.localStorage.getItem('token') !== undefined ?
                <Redirect to={'/book'} /> :
                <Redirect to={'/Login'} />
            }} />

          <Route exact={true} path='/book' component={HomePage}></Route>
          <Route path='/Login' component={Signin}></Route >
          <Route path='/register' component={SignUp}></Route>
          <Route exact={true} path='/book/detail/:id' component={Detail}></Route>
          <Route path='/book/genre/:genre' component={HomePage}></Route>
          <Route path='/book/year/:year' component={HomePage}></Route>
        </Provider>
      </Router>

    </div >
  );
}

export default App;
