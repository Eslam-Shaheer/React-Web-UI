import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import languageReducer from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
  },
});
