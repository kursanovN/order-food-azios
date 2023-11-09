import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMealsRequest } from "../../api/orderFoodService";
export const getFoods = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMealsRequest();

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || `Something went wrong!`
      );
    }
  }
);
