import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addPost(state: any[], action: { payload: any }) {
      state.push(action.payload);
    },
    removePost(state, action) {
      state.splice(action.payload, 1);
    }
  }
});

const { actions, reducer } = todoSlice;
export const { addPost, removePost } = actions;
export default reducer;
