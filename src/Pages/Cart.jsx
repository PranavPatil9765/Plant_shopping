import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { IncQuantity ,DecQuantity ,Remove} from '../utilities/CartSlice'
import { increment, decrement } from '../utilities/counterSlice';

const Cart = () => {

    const navigate = useNavigate()
    const cartitems = useSelector((state) => state.Cart.cartitems);
    const dispatch = useDispatch();


    
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cartitems.forEach(item => {
      total += calculateTotalCost(item);
    });
    return total;
  };
  const handleIncrement = (item) => {
    dispatch(IncQuantity(item));
  };

  const handleDecrement = (item) => {
    if(item.quantity ===1) {
      dispatch(Remove(item));
      dispatch(decrement());
    }else{
      dispatch(DecQuantity(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(Remove(item));
    dispatch(decrement());
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    console.log(item);
    
    return item.quantity * item.cost ;
  };
  return <>
  <Navbar/>
    <div className="cart-main">

    <h1>Total Amount : {calculateTotalAmount()}</h1>
    <br />

    {cartitems.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Cost: ${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
    
    <button onClick={()=>{navigate('/Shopping')}}>Continue Shopping</button>
    <button onClick={()=>{navigate('/')}}>Checkout</button>
    
    </div>


  </>
}

export default Cart