import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../../feature/user/redux/reducer";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
});

export default store