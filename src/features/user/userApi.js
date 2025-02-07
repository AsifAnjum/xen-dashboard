import { userApiSlice } from "../api/apiSlice";

const userApi = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;
