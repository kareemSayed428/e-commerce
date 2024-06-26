import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      state.products.push(action.payload)
    },

    removeFromCart: (state, action) => {
      
      // return all item without item click on it
      state.products = state.products.filter(item => item.id != action.payload.id)
    },
    
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer