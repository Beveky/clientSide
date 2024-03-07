import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        // Item already in wishlist, could update its quantity or leave as is
      } else {
        // Item not in wishlist, add it
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      console.log("Current items:", state.items);
      state.items = state.items.filter((item) => item._id !== action.payload);
      console.log("Items after removal:", state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
