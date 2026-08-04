import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/crud/crudSlice'

export const store = configureStore({
  reducer: {
    crud: userReducer,
  },
})
