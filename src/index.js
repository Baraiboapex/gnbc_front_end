import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './js/components/container/Main';
import './styles/app.css';
import './styles/bootstrap/css/bootstrap.min.css';
import './styles/fontawesome-free-5.10.2-web/css/all.css';
const container = document.getElementById("home");
container ? ReactDOM.render(<AppContainer/>,container) : false;


