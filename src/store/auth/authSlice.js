import { createSlice } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "./authThunk";
import { STORAGE_KEY, USERS_ROLE } from "../../constants";

const getInitialState = () => {
  const json = localStorage.getItem(STORAGE_KEY.AUTH);
  if (json) {
    const userData = JSON.parse(json);
    return {
      isAuthorization: true,
      token: userData.token,
      user: {
        name: userData.user.name,
        email: userData.user.email,
        role: userData.user.role,
      },
    };
  }
  return {
    isAuthorization: false,
    token: "",
    user: {
      email: "",
      name: "",
      role: USERS_ROLE.GUEST,
    },
  };
};

const initialState = getInitialState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthorization = false;
      state.token = "";
      state.user = {
        name: "",
        email: "",
        password: "",
        id: "",
      };
      return localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.token = action.payload.token;

        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          role: action.payload.user.role,
        };
      })

      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.token = action.payload.token;

        state.user = {
          name: action.payload.user.name,
          gmail: action.payload.user.email,
          role: action.payload.user.role,
        };
      })
      .addCase(signInRequest.pending, (state) => {
        state.isAuthorization = false;
      });
  },
});

export const authActions = authSlice.actions;
