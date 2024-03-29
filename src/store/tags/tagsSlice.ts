import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { v4 } from "uuid";

const initialState = {
  tagsList: [
    { tag: "learnings", id: v4() },
    { tag: "work", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
