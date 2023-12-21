import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userLoginInfoSlice";
const store = configureStore({
  reducer: {
    userLoggedIn: userReducer,
  },
});
export default store;
