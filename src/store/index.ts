import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer/rootReducer';

export const store = configureStore({
  reducer,
})