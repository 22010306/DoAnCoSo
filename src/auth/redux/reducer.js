import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authPermission = createAsyncThunk(
  'auth/getPermissions',
  async function (token, thunkAPI) {
    const result = await fetch('/api/authorize/permissions', {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(data => data.json())
    console.log(result)
    return result
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
    })
  }
})

export default authSlice