import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "updateProduct",
  initialState: {
    formValue: {}
  },
  reducers: {
    updateItem(state, action) {
      console.log(action)
      state.formValue = action.payload
    }
  }
})

export default updateSlice

