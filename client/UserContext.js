import React, { useContext, usestate } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [ signUpToggle, setSignUpToggle ] = useState(true);
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("")

  return (
    <UserContext.Provider user={user} loggedIn={signUpToggle} password={password}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;