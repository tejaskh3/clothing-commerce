import { createContext, useEffect, useState } from 'react';
import { onAuthStateChangedListner } from '../utils/firebase/firebase.utils';
//as the actual calue we want to access
// it is the actual storage
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

// componenet which will he children component to use corresponding context
// it holds the value to store in cotextual value.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner(user => {
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
