import { configureStore } from "@reduxjs/toolkit";
import doLaterReducer from "../pages/doLaterSlice"

const store = configureStore({
  reducer: {
    doLater: doLaterReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("doLater", JSON.stringify(state.doLater.allSavedTasks));
});

export default store;

