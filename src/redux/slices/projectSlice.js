import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "PROJECT",
  initialState: {
    projects: [],
    status: {
      loading: false,
      success: false,
      message: "",
      errors: [],
    },
  },

  reducers: {
    // CREATE PROJECT
    createProjectLoading: (state, action) => {
      state.status = { loading: true, success: false, message: "", errors: [] };
    },

    createProjectSuccess: (state, action) => {
      state.projects.push(action.payload.data);
      state.status = {
        loading: false,
        success: true,
        message: "Project successfully created",
        errors: [],
      };
    },

    createProjectFailed: (state, action) => {
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },

    // DELETE PROJECT
    deleteProjectLoading: (state, action) => {
      state.status = { loading: true, success: false, message: "", errors: [] };
    },

    deleteProjectSuccess: (state, action) => {
      const projects = state.projects.filter(
        (item) => item.id !== action.payload.data.id
      );

      state.projects = projects;
      state.status = {
        loading: false,
        success: true,
        message: "Project successfully deleted",
        errors: [],
      };
    },

    deleteProjectFailed: (state, action) => {
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },

    // UPDATE PROJECT
    updateProjectLoading: (state, action) => {
      state.status = { loading: true, success: false, message: "", errors: [] };
    },

    updateProjectSuccess: (state, action) => {
      const projects = state.projects.map((item) => {
        let res = item;
        if (item.id === action.payload.data.id) {
          res.name = action.payload.data.name;
          res.icon = action.payload.data.icon;
          res.description = action.payload.data.description;
        }

        return res;
      });

      state.projects = projects;
      state.status = {
        loading: false,
        success: true,
        message: "Project successfully updated",
        errors: [],
      };
    },

    updateProjectFailed: (state, action) => {
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },
    // GET PROJECTS
    getProjectsLoading: (state, action) => {
      state.status = { loading: true, success: false, message: "", errors: [] };
    },

    getProjectsSuccess: (state, action) => {
      state.projects = action.payload.data;
      state.status = {
        loading: false,
        success: true,
        message: "",
        errors: [],
      };
    },

    getProjectsFailed: (state, action) => {
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createProjectLoading,
  createProjectSuccess,
  createProjectFailed,
  //
  getProjectsFailed,
  getProjectsLoading,
  getProjectsSuccess,
  //
  updateProjectLoading,
  updateProjectSuccess,
  updateProjectFailed,
  //

  deleteProjectLoading,
  deleteProjectSuccess,
  deleteProjectFailed,
} = projectSlice.actions;

export default projectSlice.reducer;
