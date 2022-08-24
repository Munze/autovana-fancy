import { configureStore } from '@reduxjs/toolkit'
import searchBarReducer from './searchSideBarSlice'

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
})  