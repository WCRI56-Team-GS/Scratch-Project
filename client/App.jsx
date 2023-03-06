import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import HomePage from './components/HomePage.jsx';


const App = () => {

  const [ signUpToggle, setSignUpToggle ] = useState(false);
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState("")
  const [ isLoggedIn, setLogin ] = useState(false); //<--- Switch to false when ready
  // const [ boardData, setBoardData ] = useState([]);

  //UPON LOGIN, FETCH BOARD DATA
  // useEffect(() => {
  //   console.log('running useEffect now in App.jsx')
  //   console.log('user id: ', user)
  //   fetch('/api', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({username: user})
  //   }).then((res) => res.json())
  //   .then((data) => {
  //     console.log('Response from GET board data in APP.jsx:', data)
  //     setBoardData(data);
  //   })
  //   .catch((error) => {
  //     console.log('Error fetching boardData in APP.jsx:', error)
  //   })
  // }, [])

  //SIGN-UP / SIGN-IN TOGGLE
  const toggle = () => {
    setSignUpToggle(!signUpToggle);
  }

  return (
    <>
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
        />
      )
      )} 
    </>
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
