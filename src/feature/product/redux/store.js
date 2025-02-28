import { configureStore } from "@reduxjs/toolkit";
import updateSlice from "./updateReducer";

const store = configureStore({
  reducer: {
    update: updateSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['updateProduct/updateItem'],
      ignoredPaths: ['update.formValue.image']
    }
  })
})

export default store