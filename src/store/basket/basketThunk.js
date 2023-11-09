import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToBasketRequest,
  decrementBasketRequest,
  deleteBasketRequest,
  getBasketRequest,
  incrementBasketRequest,
} from "../../api/orderFoodService";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBasketRequest();

      return response.data.data.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const addItem = createAsyncThunk(
  "basket/addItem",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await addToBasketRequest(payload);

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const incrementFood = createAsyncThunk(
  "basket/increment",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await incrementBasketRequest(payload);

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const decrementFood = createAsyncThunk(
  "basket/decrement",
  async (payload, { rejectWithValue, dispatch }) => {
    if (payload.amount !== 0) {
      try {
        const response = await decrementBasketRequest(payload);

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      try {
        const response = await deleteBasketRequest(payload);

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        rejectWithValue(error?.response?.message || "Something went wrong!");
      }
    }
  }
);
