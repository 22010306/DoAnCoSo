import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep } from "../../../utilities/other";

export const loginAccount = createAsyncThunk(
  'auth/login',
  async function (account, thinkAPI) {

  }
)

export const authPermission = createAsyncThunk(
  'auth/getPermissions',
  async function ({ token, path }, thunkAPI) {
    return {}
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    pages: {}
  },
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(authPermission.fulfilled, (state, action) => {
      state.pages = { ...state.pages, ...action.payload }
      // state.pages = { ...action.payload }
    })
  }
})

export default authSlice