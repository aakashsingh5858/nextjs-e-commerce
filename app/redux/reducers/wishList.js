import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishListItems: [],
};

const wishList = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const item = state.wishListItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        toast.info("You have already wished");
      } else {
        const tempProduct = {
          ...action.payload,
          cartWishList: 1,
        };
        state.wishListItems.push({
          ...tempProduct,
          tempProduct,
        });
      }
    },
  },
});

export const { addToWishList } = wishList.actions;

export default wishList.reducer;
