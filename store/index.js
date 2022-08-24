import { configureStore } from '@reduxjs/toolkit'
import searchBarReducer from './searchSideBarSlice'
import menuOpenReducer from './menuOpenSlice'

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    menuOpen: menuOpenReducer,
  },
})  