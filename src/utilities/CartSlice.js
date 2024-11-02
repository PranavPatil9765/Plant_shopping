// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { increment, decrement } from '../utilities/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const CartSlice = createSlice({
  name: 'Cart',
  initialState: { cartitems: [] },
  reducers: {
    Add: (state,action) => {
      console.log('cart slice here');
      const {name,image,cost} = action.payload;
      
      // Check if item already exists in cart
      const existingItem = state.cartitems.find((item)=>item.name===name);
      
      if(!existingItem){
        
        state.cartitems = [...state.cartitems,{name:name,image:image,cost:cost,quantity:1}];
        console.log(state.cartitems);
      } 
      
      // console.log(state.cartitems);
      

      
    },
    Remove: (state,action) => {
      state.cartitems = state.cartitems.filter((item)=>{
        return item.name!== action.payload.name;
      })
    },
    IncQuantity:(state,action) => {
    
      const item = state.cartitems.find((item)=>item.name===action.payload.name);
      item.quantity++;
    },
    DecQuantity:(state,action) => {
      const item = state.cartitems.find((item)=>item.name===action.payload.name);
      item.quantity--;        
    
    }
  },
});

export const { Add, IncQuantity , Remove,DecQuantity } = CartSlice.actions;
export default CartSlice.reducer;
