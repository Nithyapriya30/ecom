import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import usersReducer from "./slice/UserSlice";
import wishReducer from './slice/WishList';
import custReducer from "./slice/ProfileSlice" 
export const store = configureStore({
  reducer: {
    products: ProductSlice,
    student: usersReducer,
    Wishlist: wishReducer,
    custprofile:custReducer
  },
});
