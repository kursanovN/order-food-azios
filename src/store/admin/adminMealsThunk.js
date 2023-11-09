import { createAsyncThunk } from "@reduxjs/toolkit";
import { addAdminFoods, getAdminFoods } from "../../api/adminService";

export const getAdminMeals = createAsyncThunk(
  "adminMeals/getAdminFoods",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAdminFoods();
      return response.data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addFoodRequest = createAsyncThunk(
  "adminMeals/addFoodReques",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await addAdminFoods(payload);
      return response.data.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
