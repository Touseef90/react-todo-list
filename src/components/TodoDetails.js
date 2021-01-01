import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoDetails = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <li onClick={() => removeTodo(todo.id)}>
      <div className="title">{todo.title}</div>
      <div className="author">{todo.description}</div>
    </li>
  );
}
 
export default TodoDetails;