import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {

  const {cartItems} =  useSelector(state => state.cart)

  return (
    <nav className='navbar'> 
        <span className="logo">REDUX STORE</span>
        <div>
            <Link className='navLink' to="/" >Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
            <span className='cartCount' >Cart Items : {cartItems.length}</span>
        </div>
    </nav>
  )
}

export default Navbar