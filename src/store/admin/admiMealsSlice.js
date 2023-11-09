import { createSlice } from "@reduxjs/toolkit";
import { addFoodRequest, getAdminMeals } from "./adminMealsThunk";

const initialState = {
  adminMeals: [],
};

export const adminMealsSlice = createSlice({
  name: "adminMeals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminMeals.fulfilled, (state, action) => {
        state.adminMeals = action.payload;
      })
      .addCase(getAdminMeals.pending, (state) => {
        state.adminMeals = [];
      })
      .addCase(getAdminMeals.rejected, (state) => {
        state.adminMeals = [];
      })

      .addCase(addFoodRequest.fulfilled, (state, action) => {
        state.adminMeals = action.payload;
      })
      .addCase(addFoodRequest.pending, (state) => {
        state.adminMeals = [];
      })
      .addCase(addFoodRequest.rejected, (state) => {
        state.adminMeals = [];
      });
  },
});
