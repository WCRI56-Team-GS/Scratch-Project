import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import HomePage from './pages/HomePage.jsx';


const App = () => {

  // should not need these state functionality in App.js and more in their used pages. no need to prop drill
  // const [ signUpToggle, setSignUpToggle ] = useState(false);
  // const [ user, setUser ] = useState(''); //<-- Switch to an empty string when ready
  // const [ password, setPassword ] = useState("")
  // const [ isLoggedIn, setLogin ] = useState(false); //<--- Switch to false when ready
  // const [loginError, setLoginError] = useState(false);


  // //SIGN-UP / SIGN-IN TOGGLE
  // const toggle = () => {
  //   setSignUpToggle(!signUpToggle);
  // }

  // useEffect(() => {
  //   if (loginError === true) alert('Incorrect username or password. Please try again');
  // },[loginError])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
 
export default App;

/*notes on the routing:
//the first Route has a path of "/" (which maybe should change?)
// and it renders the Login Page
//the next Routes are nested in that first Route

// do we need to add a catchall for undefined URLs, like <Route path="*" element={<NoPage />} />
// & then import a NoPage & have an error msg?
*/


/*
Routing:
<SignUpPage />
<LoginPage />
<HomePage />

<Router>
  <Routes>
    <Route 
      path="/login" 
      element={
        <LoginPage
          user={user}
          setUser={setUser}
          password={password}
          setPassword={setPassword}
          toggle={toggle}
          isLoggedIn={isLoggedIn}
          setLogin={setLogin}
        />
      }
    />
    <Route 
      path="/signup" 
      element={
        <SignUpPage
          user={user}
          setUser={setUser}
          password={password}
          setPassword={setPassword}
          toggle={toggle}
          isLoggedIn={isLoggedIn}
          setLogin={setLogin}
        />
      }
    />
    <Route 
      path='/home' 
      element={
        <HomePage 
        />} />
  </Routes>
</Router>

*/

/* tried useContext() 
  const [signUpToggle, setSignUpToggle]= useContext(UserProvider)
  console.log('SIGNUPTOGGLE from app: ',signUpToggle)
  console.log('UserProvider from APP.jsx', UserProvider)
*/



{/* <>
      {isLoggedIn ? (<HomePage user={user} isLoggedIn={isLoggedIn} setLogin={setLogin}/>) :
      (signUpToggle ? (
        <SignUpPage
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
        toggle={toggle}
        isLoggedIn={isLoggedIn}
        setLogin={setLogin}
      />
      ) : (
        <LoginPage
          user={user}
          setUser={setUser}
          password={password}
          setPassword={setPassword}
          toggle={toggle}
          isLoggedIn={isLoggedIn}
          setLogin={setLogin}
          setLoginError={setLoginError}
        />
      )
      )}
      {/* {loginError ? (<div>Incorrect username or password. Please try again</div>) : <></>} */}
      
