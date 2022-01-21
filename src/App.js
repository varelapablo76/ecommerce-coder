import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/Items/ItemListContainer'
import  NavbarStore  from './components/Navbar/Navbar.jsx';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget'
import ItemList from './components/Items/ItemList';
import { CartContextProvider } from './context/cartContext';
// import { CartContextProvider } from './context/cartContext';
 

// export const contextApp = createContext([])

function App() {
  return (

  <CartContextProvider>

    <BrowserRouter>

        <NavbarStore />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route exact path='/productos' element={<ItemListContainer/>} />
          <Route exact path='/productos/:itCategoria' element={<ItemList/>} />
          <Route exact path='/productos/descripcion/:idProd'  element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<CartWidget/>} />
        </Routes>
      </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
