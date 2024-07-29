import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    open: false,
    type: "",
    message: "",
  },
  deleteDialog: {
    open: false,
    id: "",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      state.snackbar = { ...action.payload };
    },
    setDeleteDialog: (state, action) => {
      state.deleteDialog = { ...action.payload };
    },
  },
});

export const { setSnackbar, setDeleteDialog } = appSlice.actions;
export default appSlice.reducer;
