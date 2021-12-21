import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './components/Navbar/logoFeikIT.svg'
import ItemListContainer from './components/ItemListContainer'

import  NavbarStore  from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <NavbarStore />
      <header className="App-header">
        <ItemListContainer logo= {logo} grettings='Comming Soon' />
      </header>
    </div>
  );
}

export default App;
