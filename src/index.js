import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { BrowserRouter as Router } from "react-router-dom";
// import Donor from "./Landing_page/donor";
// import Makerequest from "./Landing_page/makerequest";
// import Home from "./Landing_page/Home";


ReactDOM.render(
  
    <Router><App /></Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
