import React , { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home.js"
import HomeLoggedIn from "./components/homeLoggedIn.js"
import Login from "./components/login.js"
import Navbar from "./components/navbar.js"
import Form from "./components/form.js"
import Comments from "./components/comments.js"
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// home1 is logged out home
function App(props) {
    return (
        <Router>
<div className="App">
  <Navbar   />
    <Route path="/"  exact component={Home} />
    <Route path="/home1"  exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/comment" exact component={Comments} />
    <PrivateRoute path="/submit" exact component={Form} />
      <PrivateRoute path="/home" exact component={HomeLoggedIn} />
        
      </div>
      </Router>
    );
}

export default connect(null, {
})(App);