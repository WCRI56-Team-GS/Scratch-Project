import React, { Component } from 'react';
import { useState, useEffect } from 'react';


function SignUpPage ({user, setUser, password, setPassword, toggle, isLoggedIn, setLogin}) {

 

  //RENDER
  return (
    <div className="user-login-box">
        <div className='login-header'>
            Create a new Account:
        </div>
        <form onSubmit={console.log('creating new account')}>
            <label htmlFor="username">Username/Email</label>
            <input type='text' required onChange={(e) => setUser(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type='password' required onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => (console.log('open homepage'))}>Submit</button>
        </form>
            <div className='login-footer'>
                Already have an account? <button onClick={toggle}>Sign in here!</button>
            </div>
    </div>
  )
}
 
export default SignUpPage;




/* tried useContext ...

import UserProvider from '../UserContext';
import UserContext from '../UserContext';
STATE HERE IF NEEDED
const user = useContext(UserProvider)
const password = useContext(UserProvider)
// const signUpToggle = useContext(UserProvider)
// const setSignUpToggle = useContext(UserProvider)
const [signUpToggle, setSignUpToggle] = useContext(UserContext)


function toggle () {
  console.log('toggle: ', typeof setSignUpToggle)
  console.log(setSignUpToggle)
  return setSignUpToggle(false)

*/ 