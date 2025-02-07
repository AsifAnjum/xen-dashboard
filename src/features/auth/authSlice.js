import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  email: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.email = action.payload.email;
    },
    userLoggedOut: (state) => {
      state.email = undefined;
      localStorage.removeItem("auth");
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
