import React from 'react';
import { useState, useEffect, createContext } from 'react';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import UserProvider from './UserContext';



const App = () => {
 

  return (
    <>
      <div>HELLLOOOO WORLDDDD</div>
    <UserProvider>
      {signUpToggle ? <LoginPage/> : <SignUpPage/>}
    </UserProvider>

    </>
      
  )
}

export default App;

{/* <div>
        <h1>{`Hello ${user}!`}</h1>
      </div> */}