import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import menuReducer from "./menu/menuSlice";
import modalReducer from "./modal/modalSlice";
import notesListReducer from "./noteList/noteListSlice";
import tagsReducer from "./tags/tagsSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    modal: modalReducer,
    noteList: notesListReducer,
    tags: tagsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
