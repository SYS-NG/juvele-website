import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Contents from './Components/Contents'
import Profiles from './Components/Profiles'
import Cart from './Components/Cart'
import ContactForm from './Components/ContactForm'
import C3D from './Components/C3D'

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <NavBar showMenu={() => setShowMenu(!showMenu)} menu={showMenu} />
      <ContactForm/>
      <C3D/>
      <header className="App-header" id="header">
        <Home/>
        <Contents/>
        <Profiles/>
      </header>
      <Cart/>
    </div>
  );
}

export default App;
