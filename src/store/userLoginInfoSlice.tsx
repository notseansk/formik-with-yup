import { createSlice } from "@reduxjs/toolkit";

export const userLoginInfoSlice = createSlice({
  name: "logininfo",
  initialState: {
    loggedIn: false,
    user: "",
    email: "",
    password: "",
  },
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = userLoginInfoSlice.actions;
export default userLoginInfoSlice.reducer;
