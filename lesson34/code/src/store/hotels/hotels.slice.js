import { createSlice } from '@reduxjs/toolkit';
import { FETCH_HOTELS_FAILED, FETCH_HOTELS_SUCCESS } from './hotels.actions.js';

const initialState = {
  hotels: [],
  status: null,
  error: null,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    clearHotels(state) {
      state.hotels = [];
      state.status = null;
      state.error = null;
    },
  },
  selectors: {
    selectHotels: (state) => state.hotels,
    selectHotelsStatus: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_HOTELS_SUCCESS, (state, { payload }) => {
      state.hotels = payload;
      state.status = 'success';
    });
    builder.addCase(FETCH_HOTELS_FAILED, (state, { payload }) => {
      state.error = payload;
      state.status = 'failed';
    });
  },
});

export const { clearHotels } = hotelsSlice.actions;
export const { selectHotels, selectHotelsStatus } = hotelsSlice.selectors;
export const hotelsReducer = hotelsSlice.reducer;
