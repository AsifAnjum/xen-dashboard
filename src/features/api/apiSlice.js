import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_APP_USER_API,
    })(args, api, extraOptions);

    if (result?.error) {
      toast.error("An error occurred. Please try again later.");
    }

    return result;
  },
  tagTypes: ["Users"],
  endpoints: () => ({}),
});

export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_APP_PRODUCT_API,
    })(args, api, extraOptions);

    if (result?.error) {
      toast.error("An error occurred. Please try again later.");
    }

    return result;
  },
  endpoints: () => ({}),
  tagTypes: ["Products"],
});
