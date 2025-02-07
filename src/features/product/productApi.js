import { productApiSlice } from "../api/apiSlice";

const productApi = productApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/objects",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/objects/${id}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: "objects",
        method: "POST",
        body,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `objects/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `objects/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = productApi;
