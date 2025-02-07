import { configureStore } from "@reduxjs/toolkit/react";
import { productApiSlice, userApiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApiSlice.middleware)
      .concat(productApiSlice.middleware),
  devTools: import.meta.env.PROD ? false : true,
});
