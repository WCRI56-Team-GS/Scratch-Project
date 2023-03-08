import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import HomePage from './HomePage.jsx'
// import { Outlet, Link } from "react-router-dom";

function LoginPage () {
    // propdrill {user, setUser, password, setPassword, toggle, isLoggedIn, setLogin, setBoardData, setLoginError}
    // useState for username, password
    // loggedIn checked cookie/session id to bypass login page and redirects them to home page
        // Navigate to /home endpoint
    //HANDLE LOGIN
    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {username: user, password: password}
        // axios?
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        }).then((res) => {
            // TODO switch to 400 status, reset input fields and boolean?
            console.log(res.status)
            if (res.status === 404) {
                setLogin(false)
                setLoginError(true)
            } else {
                setLogin(true);
                setLoginError(false);
            }
            console.log('logged in on LoginPage.jsx')
            // console.log('users data', user)
        }).catch((error) => {
            console.log('incorrect username or password', error)
        }) 
    }
    //RENDER
    return (
        <div className='loginCont'>
            <div className="user-login-box">
                <h1 className='login-header'>Welcome! Sign in here! </h1>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div className='formLine'>
                        <label className='login-text' htmlFor="username">Username/Email</label>
                        <input className='user-input' type='text' required onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <div className='formLine'>
                        <label className='login-text' htmlFor="password">Password</label>
                        <input className='user-input' type='password' required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className='submit'>Login</button>
                </form>
                    <div className='login-footer'>
                        Don't have an Account? <button onClick={toggle}>Sign up here!</button>
                    </div>
            </div>
            {isLoggedIn && <HomePage />} 
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