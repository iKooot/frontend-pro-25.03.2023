import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api/users.js";
/****************************************
 * DUC
 ****************************************/

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
  selectors: {
    selectUsers: (state) => state.users,
    selectUsersStatus: (state) => state.status,
  },
});

export const { clearUsers, removeUser, addUser } = userSlice.actions;
export const { selectUsers, selectUsersStatus } = userSlice.selectors;
export default userSlice.reducer;

/****************************************
 * THUNK
 ****************************************/

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { signal, rejectWithValue }) => {
    try {

      const { data } = await getUsers(signal);

      const preparedData = data.map((el) => ({
        id: el.id,
        name: el.first_name,
        surname: el.last_name,
      }));

      return preparedData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  // {
  //   condition(_, { getState }) {
  //     const {
  //       users: { status },
  //     } = getState();
  //
  //     if (status === "loading") {
  //       return false;
  //     }
  //
  //     return true;
  //   },
  // },
);
