import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import './index.css';

import { BrowserRouter as Router } from "react-router-dom";

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  */
  ReactDOM.render(
    <React.StrictMode>
      <Router>
          <App />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")

);

