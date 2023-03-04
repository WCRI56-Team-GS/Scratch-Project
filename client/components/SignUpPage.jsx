import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';

function SignUpPage () {

  //STATE HERE IF NEEDED



  //RENDER
  return (
    <div className="user-login-box">
        <div className='login-header'>
            Create a new Account:
        </div>
        <form onSubmit={}>
            <label htmlFor="username">Username/Email</label>
            <input type='text' required onChange={(e) => }/>
            <label htmlFor="password">Password</label>
            <input type='password' required onChange={(e) => }/>
            <button>Submit</button>
            <div className='login-footer'>
                Already have an account? <button>Sign in here!</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage;
