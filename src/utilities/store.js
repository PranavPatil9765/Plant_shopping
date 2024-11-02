// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import CartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    Cart: CartReducer,
  },
});

export default store;
