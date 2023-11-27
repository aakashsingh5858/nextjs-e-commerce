import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.cartQuantity += 1;
        item.price = item.cartOriginalPrice * item.cartQuantity;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
          cartOriginalPrice: action.payload.price,
        };
        state.cartItems.push({
          ...tempProduct,
          tempProduct,
        });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        console.log(p.price * action.payload.val, "qqqq");
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.price = p.cartOriginalPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        } else {
          return p;
        }
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (f) => f.id !== action.payload.id
      );
    },
  },
});

export const { addTCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
