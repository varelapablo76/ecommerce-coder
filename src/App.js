import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemListContainer from './components/Items/ItemListContainer'

import  NavbarStore  from './components/Navbar/Navbar.jsx';
import ItemDetailContainer from './components/Items/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavbarStore />
      <header className="App-header">
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
