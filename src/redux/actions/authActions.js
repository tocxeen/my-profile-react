import {
  loginFail,
  loginLoading,
  loginSuccess,
  logoutFail,
  logoutLoading,
  logoutSuccess,
  requestOtpLoading,
  requestOtpFail,
  requestOtpSuccess,
  resetLoading,
  resetSuccess,
  resetFail,
} from "../slices/authSlice";

export const _login = (data) => {
  return (dispatch, getState) => {
    dispatch(loginLoading);
    try {
      const user = { name: "Richard Chifamba", email: data.email };

      //END POINT

      dispatch(loginSuccess({ user, authenticated: true, token: "12345" }));
    } catch (error) {
      dispatch(loginFail({ errors: ["Failed to login"] }));
    }
  };
};

export const _logout = () => {
  return (dispatch, getState) => {
    dispatch(logoutLoading());
    try {
      dispatch(logoutSuccess());
    } catch (error) {
      console.log(error);
      dispatch(logoutFail({ errors: ["Failed to logout"] }));
    }
  };
};

export const _requestOtp = (data) => {
  return (dispatch, getState) => {
    dispatch(requestOtpLoading);
    try {
      const user = { email: data.email };
      console.log(user);

      dispatch(requestOtpSuccess({ user }));
    } catch (error) {
      dispatch(requestOtpFail({ errors: ["Failed to send otp, Retry"] }));
    }
  };
};

export const _reset = (data) => {
  return (dispatch, getState) => {
    dispatch(resetLoading);
    try {
      const user = {
        otp: data.otp,
        password: data.password,
        email: data.email,
      };
      console.log(user.otp);

      dispatch(resetSuccess({ user }));
    } catch (error) {
      dispatch(resetFail({ errors: ["Failed to reset password, Retry"] }));
    }
  };
};
