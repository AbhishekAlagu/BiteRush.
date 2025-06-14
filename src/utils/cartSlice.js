import { createSlice } from "@reduxjs/toolkit";

//redux slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // we are mutating the state here
      if (!action.payload?.card?.info?.id) {
        console.error("Invalid item structure:", action.payload);
        return;
      }

      const itemId = action.payload.card.info.id;

      const index = state.items.findIndex(
        (entry) => entry.item?.card?.info?.id === itemId
      );
      if (index !== -1) {
        // Already in cart: increase quantity
        state.items[index].quantity += 1;
      } else {
        // New item: push with quantity 1
        state.items.push({ item: action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload?.card?.info?.id;

      if (!itemId) {
        console.error("Invalid item to remove:", action.payload);
        return;
      }

      const index = state.items.findIndex(
        (entry) => entry.item?.card?.info?.id === itemId
      );

      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1); // Remove item completely
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
