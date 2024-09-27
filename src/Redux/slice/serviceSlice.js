import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  service: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    addService: (state, action) => {
      const newService = { ...action.payload, id: state.service.length + 1 };
      state.service.push(newService);
      localStorage.setItem("service", newService);
    },
    updateService: (state, action) => {
      const { id, name, price, description } = action.payload; // Extract updated data
      const index = state.service.findIndex((service) => service.id === id); // Find service by id

      if (index !== -1) {
        // If service exists, update its properties
        state.service[index] = action.payload;
      }
    },

    deleteService: (state, action) => {
      const { id } = action.payload;

      state.service = state.service.filter((data) => data.id !== id);
    },
  },
});

export const { addService, updateService, deleteService, editService } =
  serviceSlice.actions;

export default serviceSlice.reducer;
