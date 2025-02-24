import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep } from "../../utilities/other";

export const loginAccount = createAsyncThunk(
  'auth/login',
  async function (account, thinkAPI) {

  }
)

export const authPermission = createAsyncThunk(
  'auth/getPermissions',
  async function (token, thunkAPI) {
    const result = await fetch('/api/auth/authorize/access-page', {
      method: "GET",
      headers: { authorization: token }
    }).then(a => a.json())
    console.log(result)
    return result.permissions
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
      state.pages = { ...action.payload }
    })
  }
})

export default authSlice