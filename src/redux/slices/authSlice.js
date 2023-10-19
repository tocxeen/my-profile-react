import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "AUTH",
  initialState: {
    authenticated: false,
    token: null,
    user: null,
    init: false,
    status: {
      loading: false,
      success: false,
      message: "",
      errors: [],
    },
  },

  reducers: {
    // LOGIN

    loginLoading: (state, action) => {
      state.status = {
        loading: true,
        success: false,
        message: "",
        errors: [],
      };
    },

    loginSuccess: (state, action) => {
      state.authenticated = action.payload.authenticated;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status.loading = false;
      state.status.success = true;
    },

    loginFail: (state, action) => {
      state.authenticated = false;
      state.token = false;
      state.user = null;
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },

    // LOGOUT
    logoutLoading: (state, action) => {
      state.status = {
        loading: true,
        success: false,
        message: "",
        errors: [],
      };
    },

    logoutSuccess: (state, action) => {
      state.authenticated = false;
      state.token = false;
      state.user = null;
      state.status = {
        loading: false,
        success: true,
        message: "",
        errors: [],
      };
    },

    logoutFail: (state, action) => {
      state.authenticated = false;
      state.token = false;
      state.user = null;
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },

    // USER

    setUser: (state, action) => {
      state.authenticated = action.payload.authenticated;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.init = action.payload.init;
      state.status = action.payload.status;
    },

    //Request otp still reading
    requestOtpLoading: (state, action) => {
      state.status = {
        loading: true,
        success: false,
        message: "",
        errors: [],
      };
    },

    requestOtpSuccess: (state, action) => {
      state.authenticated = false;
      state.token = false;
      state.user = null;
      state.status = {
        loading: false,
        success: true,
        message: "",
        errors: [],
      };
    },

    requestOtpFail: (state, action) => {
      state.authenticated = false;
      state.token = false;
      state.user = null;
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },

    //reset password
    resetLoading: (state, action) => {
      state.status = {
        loading: true,
        success: false,
        message: "",
        errors: [],
      };
    },

    resetFail: (state, action) => {
      state.authenticated = false;
      state.token = false;
      state.user = null;
      state.status = {
        loading: false,
        success: false,
        message: "",
        errors: action.payload.errors,
      };
    },

    resetSuccess: (state, action) => {
      state.authenticated = false;
      state.token = false;
      state.user = null;
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
  loginLoading,
  loginSuccess,
  loginFail,

  logoutLoading,
  logoutSuccess,
  logoutFail,
  logout,
  setUser,
  signup,

  requestOtpFail,
  requestOtpLoading,
  requestOtpSuccess,

  resetLoading,
  resetSuccess,
  resetFail,
} = authSlice.actions;

export default authSlice.reducer;
