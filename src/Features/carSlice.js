import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: ["SUVs", "Trucks", "Cars", "Electric"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer