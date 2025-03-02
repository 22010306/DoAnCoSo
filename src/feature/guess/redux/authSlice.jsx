import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authCustomer = createAsyncThunk(
  "customerAuth/getToken",
  async function (_, thunkAPI) {
    const auth = localStorage.getItem('auth-customer')

    if (auth) return auth

    // fetch customer's account
    const result = await fetch('/api/customer/auth')
      .then(data => data.json())
      .then(data => data.data)

    return result
  }
)

export function getAuth(state) {
  return state.customerAuth.token
}

const authSlice = createSlice({
  name: "customerAuth",
  initialState: { token: '' },
  extraReducers(builder) {
    builder.addCase(authCustomer.fulfilled, (state, action) => {
      state.token = action.payload
    })
  }
})

export default authSlice