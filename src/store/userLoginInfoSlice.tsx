import { createSlice } from "@reduxjs/toolkit";

export const userLoginInfoSlice = createSlice({
  name: "logininfo",
  initialState: {
    loggedIn: false,
    user: "",
  },
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = userLoginInfoSlice.actions;
export default userLoginInfoSlice.reducer;
