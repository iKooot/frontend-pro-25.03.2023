import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  reducerPath: 'userToolkit',
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = initialState.users;
      state.status = initialState.status;
      state.error = initialState.error;
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
    selectUsersStatus: (state) => state.status
  },
});

export const { clearUsers } = userSlice.actions;
export const { selectUsers, selectUsersStatus } = userSlice.selectors;
export default userSlice.reducer;

/****************************************
 * THUNK
 ****************************************/

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue, signal }) => {
    try {
      const resp = await fetch("https://reqres.in/api/users", {
        signal,
      });

      if (signal.aborted) {
        throw new Error("stop the work, this has been aborted!");
      }

      const { data } = await resp.json();

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
  //   condition: (_, { getState, extra }) => {
  //     const {
  //       users: { status },
  //     } = getState();
  //     // if my thunk request is in progress i need cancel new requests before my old job will finished
  //     if (status === "loading") {
  //       return false;
  //     }
  //   },
  // },
);
