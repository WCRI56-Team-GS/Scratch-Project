import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import UserProvider from '../UserContext';




function LoginPage () {

    //STATE HERE IF NEEDED
    const user = useContext(UserProvider)
    const password = useContext(UserProvider)

    //RENDER
    return (
        <div className="user-login-box">
            <div className='login-header'>
                Welcome! Sign in here! 
            </div>
            <form onSubmit={console.log('logged in')}>
                <label htmlFor="username">Username/Email</label>
                <input type='text' required onChange={(e) => setUser(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type='password' required onChange={(e) => setPassword(e.target.value)}/>
                <button>Submit</button>
                <div className='login-footer'>
                    Don't have an Account? <button onClick={() => setSignUpToggle(!signUpToggle)}>Sign up here!</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;