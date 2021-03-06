import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContDash from "./Backoffice/ContDash"
import DataProvider from "./redux/store"
import AdminDash from './Backoffice/AdminDash';
import Header from './components/header/Header';
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
    <App/>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
