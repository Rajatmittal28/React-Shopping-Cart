import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Cart from './components/Cart.jsx';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes >
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/cart" element={ <Cart /> }></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
