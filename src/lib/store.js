// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import chatReducer from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    chat: chatReducer,
  },
});

export default store;
