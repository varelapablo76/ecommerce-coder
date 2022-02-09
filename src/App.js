import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/Items/ItemListContainer'
import  NavbarStore  from './components/Navbar/Navbar.jsx';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget'
import ItemList from './components/Items/ItemList';

import RegisterUser from './components/Users/RegisterUser'

import { CartContextProvider } from './context/cartContext';
import { UserShopProvider } from './context/userContext';
// import { CartContextProvider } from './context/cartContext';
 

// export const contextApp = createContext([])

function App() {
  return (

  <CartContextProvider>

  <UserShopProvider >
    <BrowserRouter>

        <NavbarStore />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route exact path='/productos' element={<ItemListContainer/>} />
          <Route exact path='/productos/:categoryID' element={<ItemList/>} />
          <Route exact path='/productos/descripcion/:id'  element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<CartWidget/>} />
          <Route path='login' element={<RegisterUser/>}/>
        </Routes>
      </BrowserRouter>

      </UserShopProvider>

  </CartContextProvider>
  );
}

export default App;
