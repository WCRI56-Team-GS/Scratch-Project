import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import HomePage from './HomePage.jsx'
// import { Outlet, Link } from "react-router-dom";

function LoginPage ({user, setUser, password, setPassword, toggle, isLoggedIn, setLogin}) {

    //STATE HERE IF NEEDED

    //RENDER
    return (
        <div className="user-login-box">
            <div className='login-header'>
                Welcome! Sign in here! 
            </div>
            <form onSubmit={console.log('logged in')}>
                <label className='login-text' htmlFor="username">Username/Email</label>
                <input className='user-input' type='text' required onChange={(e) => setUser(e.target.value)}/>
                <label className='login-text' htmlFor="password">Password</label>
                <input className='user-input' type='password' required onChange={(e) => setPassword(e.target.value)}/>
                <button>Submit</button>
            </form>
                <div className='login-footer'>
                    Don't have an Account? <button onClick={toggle}>Sign up here!</button>
                </div>
        </div>
    )
}
 
export default LoginPage;


/* tried useContext()

import UserProvider from '../UserContext';
import UserContext from '../UserContext';

    const user = useContext(UserProvider)
    const password = useContext(UserProvider)
    const signUpToggle = useContext(UserProvider)
    const setSignUpToggle = useContext(UserProvider)
    const [signUpToggle, setSignUpToggle] = useContext(UserContext)


    function toggle () {
        console.log(setSignUpToggle)
        console.log('toggle: ', typeof setSignUpToggle)
        setSignUpToggle(false)
*/