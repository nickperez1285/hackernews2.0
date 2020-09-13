import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { apiReducer } from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const store = createStore(apiReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Router>
    <Provider store={store}>
 		 <App />
   </Provider>
    	</Router>,

    document.getElementById('root')
);
