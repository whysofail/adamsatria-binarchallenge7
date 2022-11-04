/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const populateCars = (cars) => {
  return cars.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    ).toJSON();

    return {
      ...car,
      availableAt,
    };
  });
};

const initialState = {
  cars: [],
  filteredCars: [],
  isLoading: "idle",
  isError: false,
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const url =
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";
  const response = await axios.get(url);
  return response.data;
});

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    filterCars: (state, action) => {
      const { driverType, date, time, capacity } = action.payload;
      console.log(capacity, driverType);
      const availability = driverType === "true";
      const dateFormat = new Date(date);
      dateFormat.setHours(time);
      const data = state.cars;
      const filteredCars = data.filter((element) => {
        const carsDate = new Date(element.availableAt);
        return !capacity > 0
          ? element.available === availability && carsDate <= dateFormat
          : element.available === availability && carsDate <= dateFormat && element.capacity <= capacity && element.capacity >= capacity;
      });
      return { ...state, filteredCars };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        // Add any fetched cars to the array
        // state.cars = state.cars.concat(action.payload);
        state.cars = populateCars(action.payload);
        state.filteredCars = state.cars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isError = "failed";
      });
  },
});
export const { filterCars } = carsSlice.actions;

export default carsSlice.reducer;

export const selectAllCars = (state) => state.cars.cars;

export const selectFilteredCars = (state) => state.cars.filteredCars