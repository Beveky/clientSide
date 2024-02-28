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
      const productIdToRemove = action.payload;
      const productToRemoveIndex = state.products.findIndex(
        (product) => product._id === productIdToRemove
      );

      if (productToRemoveIndex !== -1) {
        const productToRemove = state.products[productToRemoveIndex];

        // If the product is an array, count it as a single removal event
        if (Array.isArray(productToRemove)) {
          // Reduce total quantity by 1, treating the removal of the entire array as one removal event
          state.quantity -= 1;
          state.total -= productToRemove.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          );

          // Remove all products in the array
          state.products = state.products.filter(
            (product) =>
              !productToRemove.map((p) => p._id).includes(product._id)
          );
        } else {
          // If the product is a single item, remove it individually
          state.quantity -= 1;
          state.total -= productToRemove.price * productToRemove.quantity;

          state.products.splice(productToRemoveIndex, 1);
        }
      }
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
