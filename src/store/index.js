import { configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./meals/mealsSlice";
import { basketSlice } from "./basket/basketSlice";
import { snacBarSlice } from "./snackBar";
import { authSlice } from "./auth/authSlice";
import { adminMealsSlice } from "./admin/admiMealsSlice";

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [snacBarSlice.name]: snacBarSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [adminMealsSlice.name]:adminMealsSlice.reducer,
  },
});
