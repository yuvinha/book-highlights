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
  }),
});

export const { useGetQuotationsQuery } = quotationsApiSlice;
