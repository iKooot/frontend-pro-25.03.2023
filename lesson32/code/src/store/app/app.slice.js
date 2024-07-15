import { createSlice } from "@reduxjs/toolkit";
import { DARK_THEME } from "../../services/constants.js";

const initialState = {
  theme: DARK_THEME,
};

const userSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
  selectors: {
    selectTheme: (state) => state.theme,
  },
});

export const { setTheme } = userSlice.actions;
export const { selectTheme } = userSlice.selectors;
export default userSlice.reducer;
