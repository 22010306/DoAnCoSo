import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export function getAdminToken(state) {
  return state.adminAuth.token
}

const authAdminSlice = createSlice({
  name: "adminAuth",
  initialState: {
    token: ""
  },
  reducers: {
    authorize(state, action) {
      state.token = action.payload
    }
  },
  extraReducers(builder) {

  }

})

export default authAdminSlice