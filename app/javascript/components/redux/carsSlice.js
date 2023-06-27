import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "/api/v1/cars";

const initialState = {
  cars: [],
  isLoading: true,
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectCars = (state) => state.cars;

export default carsSlice.reducer;
