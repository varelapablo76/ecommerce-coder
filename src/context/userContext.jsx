import { useState, useContext, createContext } from 'react';

const userContext = createContext([]);

export function UseUserContext(){
    return useContext(userContext);
}

export const UserShopProvider = ({ children }) => {
    const [userShop, setUserShop] = useState([]);
  
    function createUser (user) {
        setUserShop(user)
    
    }

    function updateLogin (user) {
      setUserShop(user)
    }

    return (
      <userContext.Provider
      value= {{
          userShop,
          setUserShop,
          createUser,
          updateLogin

      }}
      >
        {children}
      </userContext.Provider>
    );
  };
  
