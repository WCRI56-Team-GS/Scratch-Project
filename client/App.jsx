import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import HomePage from './components/HomePage.jsx';


const App = () => {

  const [ signUpToggle, setSignUpToggle ] = useState('');
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("")
  const [ isLoggedIn, setLogin ] = useState(true);


  const toggle = () => {
    setSignUpToggle(!signUpToggle);
  }

  return (
    <>
      <div>HELLLOOOO WORLDDDD</div>
      {signUpToggle ? (
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

      )}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route path="signup" element={<SignUpPage />} />
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <HomePage/>
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


/* tried useContext() 
  const [signUpToggle, setSignUpToggle]= useContext(UserProvider)
  console.log('SIGNUPTOGGLE from app: ',signUpToggle)
  console.log('UserProvider from APP.jsx', UserProvider)
*/
