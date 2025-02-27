import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep } from "../../../utilities/other";



const authSlice = createSlice({
  name: "auth",
  initialState: {
    pages: {}
  },
  reducers: {

  },
  extraReducers(builder) {

  }
})

export default authSlice