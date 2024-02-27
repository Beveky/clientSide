import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], quantity: 0, total: 0 },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      console.log("Removing product with ID:", action.payload);
      const productIdToRemove = action.payload;
      const productToRemoveIndex = state.products.findIndex(
        (product) => product._id === productIdToRemove
      );

      if (productToRemoveIndex !== -1) {
        const productToRemove = state.products[productToRemoveIndex];

        // If there's only one instance of the product, remove it completely
        if (productToRemove.quantity === 1) {
          state.quantity -= 1;
          state.total -= productToRemove.price;
          state.products.splice(productToRemoveIndex, 1);
        } else {
          // If there are multiple instances, decrement the quantity and subtract the price of one instance
          state.quantity -= 1;
          state.total -= productToRemove.price;
          state.products[productToRemoveIndex].quantity -= 1;
        }
      }
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
