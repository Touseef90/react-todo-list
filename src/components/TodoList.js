import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {

  const { todos } = useContext(TodoContext);
  
  return todos.length ? (
    <div className="todo-list">
      <ul>
        { todos.map(todo => {
          return ( <TodoDetails key={todo.id} todo={todo} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No todos left. Hello free time.</div>
  );
}

export default TodoList;