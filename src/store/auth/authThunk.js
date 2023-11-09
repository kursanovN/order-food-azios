import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../api/authService";
import { STORAGE_KEY } from "../../constants";

export const signUpRequest = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signUp(payload);

      localStorage.setItem(
        STORAGE_KEY.AUTH,
        JSON.stringify(responce.data.data)
      );

      console.log(responce.data.data, "FJDSKFD");
      return responce.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signin",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signIn(payload);

      localStorage.setItem(
        STORAGE_KEY.AUTH,
        JSON.stringify(responce.data.data)
      );

      console.log(responce.data.data, "data");
      return responce.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
