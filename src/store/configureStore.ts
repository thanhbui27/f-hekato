import { combineReducers, configureStore } from '@reduxjs/toolkit'
import testReducer from './test/slice'
import authReducer from './auth/slice'

const rootReducer = combineReducers({
  test :  testReducer,
  auth : authReducer
})

export type RootStateType = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer : rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type StoreState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;

export default store;