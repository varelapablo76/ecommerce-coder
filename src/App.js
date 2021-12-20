import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './components/Navbar/logoFeikIT.svg'


import  NavbarStore  from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <NavbarStore />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon
        </p>
      </header>
    </div>
  );
}

export default App;
