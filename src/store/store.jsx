import { configureStore } from "@reduxjs/toolkit";
import callToApiSlice from "../components/Home/callToApiSlice.js";
const store = configureStore({
  reducer: {
    recipies: callToApiSlice.reducer,
  },
});

export default store;
