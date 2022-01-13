import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer'

import  NavbarStore  from './components/Navbar/Navbar.jsx';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget'
import ItemList from './components/Items/ItemList';
function App() {
  return (
    <BrowserRouter>
      <NavbarStore />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        {/* <Route path='/item' element={<ItemDetailContainer/>} /> */}
        <Route exact path='/productos' element={<ItemList/>} />
          <Route exact path='/productos/:itCategoria' element={<ItemList/>} />
        <Route exact path='/productos/descripcion/:idProd'  element={<ItemDetailContainer/>} />

        <Route path='/carrito' element={<CartWidget/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
