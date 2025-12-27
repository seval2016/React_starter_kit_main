
import { useSelector } from 'react-redux'
import Todo from './Todo'
import type { RootState } from '../redux/store';
import type { TodoType } from '../types/Types';


function TodoList() {
  
  const {todos} =  useSelector((state:RootState) => state.todo);

  return (
    <>
    { todos && todos.map((todo:TodoType) =>(
      <Todo key={todo.id} todoProps={todo} />
    ) )} 
    </>
  )
}

export default TodoList
