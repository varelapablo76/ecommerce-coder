import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/Items/ItemListContainer'
import  NavbarStore  from './components/Navbar/Navbar.jsx';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget'
import PostShop from './components/Items/PostShop';

import RegisterUser from './components/Users/RegisterUser'

import { CartContextProvider } from './context/cartContext';
import { UserShopProvider } from './context/userContext';
import The404 from './components/Items/The404';


function App() {
  return (

  <CartContextProvider>

  <UserShopProvider >
    <BrowserRouter>

        <NavbarStore />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route exact path='/productos' element={<ItemListContainer/>} />
          <Route exact path='/productos/:categoryID' element={<ItemListContainer/>} />
          <Route exact path='/productos/:categoryID/:id'  element={<ItemDetailContainer/>} />
          <Route path='*' element={<The404 /> }/>
          <Route exact path='/orders/:id'  element={<PostShop />} />

          <Route exact path='/carrito' element={<CartWidget/>} />
          <Route exact path='/usuario' element={<RegisterUser/>}/>

        </Routes>
      </BrowserRouter>

      </UserShopProvider>

  </CartContextProvider>
  );
}

export default App;
