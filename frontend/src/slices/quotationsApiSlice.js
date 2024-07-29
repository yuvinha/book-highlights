import { apiSlice } from "./apiSlice";
import { QUOTATIONS_URL } from "../constants";

export const quotationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuotations: builder.query({
      query: () => ({
        url: QUOTATIONS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    createQuotation: builder.mutation({
      query: (data) => ({
        url: QUOTATIONS_URL,
        method: "POST",
        body: data,
      }),
    }),
    deleteQuotation: builder.mutation({
      query: (quotationId) => ({
        url: `${QUOTATIONS_URL}/${quotationId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetQuotationsQuery,
  useCreateQuotationMutation,
  useDeleteQuotationMutation,
} = quotationsApiSlice;
