import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import UserProvider from './UserContext';
import UserContext from './UserContext';



const App = () => {
  // const [signUpToggle, setSignUpToggle]= useContext(UserProvider)
  // console.log('SIGNUPTOGGLE from app: ',signUpToggle)
  // console.log('UserProvider from APP.jsx', UserProvider)
  const [ signUpToggle, setSignUpToggle ] = useState(true);
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("")

  const toggle = () => {
    setSignUpToggle(!signUpToggle);
  }

  return (
    <>
      <div>HELLLOOOO WORLDDDD</div>
      {signUpToggle ? 
        <LoginPage user={user} setUser={setUser} password={password} setPassword={setPassword} toggle={toggle}/> 
        : <SignUpPage user={user} setUser={setUser} password={password} setPassword={setPassword} toggle={toggle}/>
      }
    </>
      
  )
}
 
export default App;

