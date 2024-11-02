import React from 'react'
import plantlogo from '../images/plantlogo.png'
import shoppingcart from '../images/shoppingcart.png'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../utilities/counterSlice';

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return <>
  
    <div className="navbar">
      <div className="logo-text" onClick={()=>{navigate('/')}}>
        <img src={plantlogo} alt="logo" />
        <div className="nav-text">
          <h1>Plant App</h1>
          <h2>Grow your plants like a pro</h2>
        </div>
      </div>

      <h1 onClick={()=>{navigate("/Shopping")}}>Plants</h1>

      <div className="cart-icon" onClick={()=>{navigate("/Cart")}}>
        <div className="shoppingcart-image"><img src={shoppingcart} alt="" />
        </div>
        <h2>{count}</h2>
      </div>

    </div>
  
  </>
}

export default Navbar