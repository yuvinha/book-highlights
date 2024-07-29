import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: localStorage.getItem("quotes")
    ? JSON.parse(localStorage.getItem("quotes"))
    : null,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setQuotes: (state, action) => {
      state.quotes = action.payload;
      localStorage.setItem("quotes", JSON.stringify(action.payload));
    },
    addQuote: (state, action) => {
      const newQuote = action.payload;
      state.quotes = [...state.quotes, newQuote];
      localStorage.setItem("quotes", JSON.stringify(state.quotes));
    },
    removeQuote: (state, action) => {
      state.quotes = state.quotes.filter(
        (quote) => quote._id !== action.payload
      );
      localStorage.setItem("quotes", JSON.stringify(state.quotes));
    },
  },
});

export const { setQuotes, addQuote, removeQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
