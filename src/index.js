import React from 'react';
import ReactDOM from 'react-dom';
import { FormInicio } from './components/FormInicio';
import { Inicio } from './components/Inicio';

import { Maincontainer } from './components/Maincontainer';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
    <FormInicio/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
