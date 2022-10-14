import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : null,
  token: window.localStorage.getItem("token") ?? null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.login.user;
      state.token = payload.login.token;

      window.localStorage.setItem("user", JSON.stringify(payload.login.user));
      window.localStorage.setItem("token", payload.login.token);
    },
    removeUser: (state) => {
      state.user = null;
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token");
    },
  },
});

export const { setUser, removeUser, setTitle } = counterSlice.actions;

export default counterSlice.reducer;
