import React from 'react'
import "./Login.css";


const Login = () => {
  return (
    <React.Fragment>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' />
            <label htmlFor="pwd">Password:</label>
            <input type="password" name="pwd" id="pwd" />
            <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Login;
