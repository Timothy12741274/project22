import {combineReducers, configureStore} from "@reduxjs/toolkit";
import newsReducer from "./reducer/newsReducer";


const rootReducer = combineReducers({
    newsReducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer
  })
}
export type StoreType = ReturnType<typeof setupStore>
export type StateType = ReturnType<typeof rootReducer>
export type DispatchType = StoreType['dispatch']