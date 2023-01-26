import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonCard from './PersonCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard nombre={"Augusto"} apellido={"Baez"} edad={22} cabello={"Brown"} />
    <PersonCard nombre={"Elon"} apellido={"Musk"} edad={50} cabello={"Brown"} />
    <PersonCard nombre={"Jeff"} apellido={"Bezos"} edad={60} cabello={"no hair"} />
    <PersonCard nombre={"Lex"} apellido={"Fridman"} edad={32} cabello={"Black"} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
