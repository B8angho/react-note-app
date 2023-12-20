import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { Note } from "./../../types/note";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: null | Note[];
}

const initialState: NoteState = {
  mainNotes: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

const NoteListSlice = createSlice({
  name: "noteList",
  initialState,
  reducers: {},
});

export default NoteListSlice.reducer;
