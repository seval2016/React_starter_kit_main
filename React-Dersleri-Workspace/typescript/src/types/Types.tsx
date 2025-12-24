export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoInitialState {
  todos: TodoType[];
}