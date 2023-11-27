import { combineReducers } from "redux";
import cartReducer from "./cartItem";
import wishListReducer from "./wishList";

const rootReducer = combineReducers({
  cartItems: cartReducer,
  wishListItems: wishListReducer,
});

export default rootReducer;
