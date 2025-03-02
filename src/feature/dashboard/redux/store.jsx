import { configureStore } from "@reduxjs/toolkit"
import authAdminSlice from "./adminSlice"

const store = configureStore({
  reducer: {
    adminAuth: authAdminSlice.reducer
  }
})

export default store