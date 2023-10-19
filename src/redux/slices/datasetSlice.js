import { createSlice } from "@reduxjs/toolkit";

export const datasetSlice = createSlice({
  name: "Dataset",
  initialState: {
    datasets: [],
    status: {
      loading: false,
      success: false,
      message: "",
      errors: [],
    },
  },

  reducers: {
    createDatasetLoading: (state, action) => {
      state.status = { loading: true, success: false, message: "", errors: [] };
    },

    createDatasetSuccess: (state, action) => {
      state.datasets.push(action.payload.data);
      state.status = {
        loading: false,
        success: true,
        message: "Data successfully created",
        errors: [],
      };
    },

    createDatasetFailed: (state, action) => {
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },

    getDatasetLoading: (state, action) => {
      state.status = { loading: true, success: false, message: "", errors: [] };
    },

    getDatasetSuccess: (state, action) => {
      state.datasets = action.payload.data;
      state.status = {
        loading: false,
        success: true,
        message: "",
        errors: [],
      };
    },

    getDatasetFailed: (state, action) => {
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },
  },
});

export const {
  createDatasetLoading,
  createDatasetSuccess,
  createDatasetFailed,
  getDatasetFailed,
  getDatasetLoading,
  getDatasetSuccess,
} = datasetSlice.actions;

export default datasetSlice.reducer;
