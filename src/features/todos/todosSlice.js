import { createSlice } from "@reduxjs/toolkit";

//normally I would have separate files for each section
//slice

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

//actions
export const { addTodo, deleteTodo } = todosSlice.actions;

//selectors
export const selectTodos = ({ todos }) => todos;

export default todosSlice.reducer;
