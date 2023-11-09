import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "",
  message: "",
};

export const snacBarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSuccess(state, action) {
      state.severity = "success";
      state.message = action.payload;
      state.open = true;
    },
    doError(state) {
      state.severity = "error";
      state.message = "Something went wrong❗️"
      state.open = true;
    },
    closeSnackBar(state) {
      state.open = false;
    },
  },
});

export const snackBarAction = snacBarSlice.actions;
