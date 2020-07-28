import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Components/home/Home";
import * as serviceWorker from './serviceWorker';
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import App from "./App";



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
