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

    console.log(token)

    await sleep(1000)
    const perm = {
      "success": true,
      "message": "Success.",
      "permissions": {
        "/": true,
        "/auth": true,
        "/dashboard": false
      }
    }
    return perm.permissions
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: '',
    permission: {}
  },
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(authPermission.fulfilled, (state, action) => {
      console.log(action)
      state.permission = { ...action.payload }
    })
  }
})

export default authSlice