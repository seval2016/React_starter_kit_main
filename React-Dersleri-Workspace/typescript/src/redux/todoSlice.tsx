import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoInitialState, TodoType } from '../types/Types';


const initialState : TodoInitialState ={
todos: [],
}


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },

    clearCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.completed);
    },
  },
});

export const {
 createTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
