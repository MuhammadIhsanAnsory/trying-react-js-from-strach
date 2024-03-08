import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("On create store : ", store.getState());

store.subscribe(() => {
  console.log("Store change : ", store.getState());
});

export default store;
