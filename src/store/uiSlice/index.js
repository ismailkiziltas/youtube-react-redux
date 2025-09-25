import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
  categoryId: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { toggleSidebar, setCategoryId } = uiSlice.actions;

export default uiSlice.reducer;
