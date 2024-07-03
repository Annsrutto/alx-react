import React from 'react'
import logo from "./Holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from './utils';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={ logo } alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' />
          <label htmlFor="pwd">Password</label>
          <input type="password" name="pwd" id="pwd" />
          <button>OK</button>
        </form>
      </body>
      <footer className='App-footer'>Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </div>
  )
}

export default App;

