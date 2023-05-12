import { combineReducers, configureStore } from '@reduxjs/toolkit'
import testReducer from './test/slice'
import authReducer from './auth/slice'
import productReducer from './product/slice'
import cartReducer from './cart/slice'
import uploadReducer from './upload/slice'
import commentReducer from './comment/slice'
import cateReducer from './category/slice'
import orderReducer from './orders/slice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  test :  testReducer,
  auth : authReducer,
  product : productReducer,
  cart : cartReducer,
  upload : uploadReducer,
  comment : commentReducer,
  category : cateReducer,
  orders : orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer : persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type StoreState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;