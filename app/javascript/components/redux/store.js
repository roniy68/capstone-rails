import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
