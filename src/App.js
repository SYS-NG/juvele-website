import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Contents from './Components/Contents'
import Profiles from './Components/Profiles'

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <NavBar showMenu={() => setShowMenu(!showMenu)} menu={showMenu} />
      <header className="App-header">
        <Home/>
        <Contents/>
        <Profiles/>
      </header>
    </div>
  );
}

export default App;
