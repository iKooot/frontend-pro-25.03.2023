import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = initialState.users;
      state.status = initialState.status;
      state.error = initialState.error;
    },
    removeUser: (state, action) => {
      state.users = [...state.users].filter(
        ({ id }) => id !== action.payload.id,
      );
    },
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    fetchUsersStart(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchUsersSuccess(state, { payload }) {
      state.status = "success";
      state.users = payload;
    },
    fetchUsersFailure(state, { payload }) {
      state.status = "error";
      state.error = payload;
    },
  },
  selectors: {
    selectUsers: (state) => state.users,
    selectUsersStatus: (state) => state.status,
  },
});

export const {
  clearUsers,
  removeUser,
  addUser,
  fetchUsersFailure,
  fetchUsersStart,
  fetchUsersSuccess,
} = userSlice.actions;
export const { selectUsers, selectUsersStatus } = userSlice.selectors;
export default userSlice.reducer;
