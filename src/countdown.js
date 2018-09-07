import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App(props) {
    return (      
        <div onClick={props.onClick} >This div has been clicked {props.clicks} <span>times</span></div>      
    );
  }


export default App;
