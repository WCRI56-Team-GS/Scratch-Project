import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import UserProvider from '../UserContext';

function SignUpPage () {

  //STATE HERE IF NEEDED
  const user = useContext(UserProvider)
  const password = useContext(UserProvider)


  //RENDER
  return (
    <div className="user-login-box">
        <div className='login-header'>
            Create a new Account:
        </div>
        <form onSubmit={console.log('created new account')}>
            <label htmlFor="username">Username/Email</label>
            <input type='text' required onChange={(e) => setUser(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type='password' required onChange={(e) => setPassword(e.target.value)}/>
            <button>Submit</button>
            <div className='login-footer'>
                Already have an account? <button onClick={() => setSignUpToggle(!signUpToggle)}>Sign in here!</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage;
