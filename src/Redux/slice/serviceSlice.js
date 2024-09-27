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
      const { id } = action.payload;
      const index = state.service.findIndex((service) => service.id === id);

      if (index !== -1) {
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
