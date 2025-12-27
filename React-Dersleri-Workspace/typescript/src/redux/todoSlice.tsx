import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState, TodoType } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },

    removeTodoById: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    editTodoById: (state, action: PayloadAction<TodoType>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },

    clearCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.completed);
    },
  },
});

export const {
  createTodo,
  editTodoById,
  removeTodoById,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
