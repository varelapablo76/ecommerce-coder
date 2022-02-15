import { useState, useContext, createContext } from 'react';

const userContext = createContext([]);
console.log('testin1 passed')

export function UseUserContext(){
    return useContext(userContext);
}
console.log('testin2 passed')

export const UserShopProvider = ({ children }) => {
    const [userShop, setUserShop] = useState([]);
  
console.log('tetin3 passed')

    function createUser (user) {
        setUserShop(user)
        console.log(user)
        console.log(userShop)
        console.log('userShop from userContext')
    
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
  

// export const UserContextProvider = ({ children }) => {
//     // const [userShop, SetUserShop] = useState([]);

//     // function createUser (user) {
//     //     SetUserShop(user)
//     // }

//     console.log('testin3 passed')


//     return (
//         <userContext.Provider
//       >
//             {children}
//             {console.log('testin4 passed')
// }
//         </userContext.Provider>
//     );
    
// };