import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rohit from './Rohit';
import reportWebVitals from './reportWebVitals';

const Name = 'Mohit'

ReactDOM.render(
    <Rohit name={Name} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
