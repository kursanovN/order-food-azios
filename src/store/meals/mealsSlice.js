import { createSlice } from "@reduxjs/toolkit";
import { getFoods } from "./mealsThunk";

const initialState = {
  meals: [],
  isLoading: false,
  isError: "",
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getFoods.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(getFoods.pending, (state) => {
        state.isLoading = true;
        state.meals = [];
        state.isError = "";
      })
      .addCase(getFoods.rejected, (state, action) => {
        state.isLoading = false;
        state.meals = [];
        state.isError = action.payload;
      });
  },
});
