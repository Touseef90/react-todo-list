import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title}
       onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={description}
       onChange={(e) => setDescription(e.target.value)} />
      <input type="submit" value="add todo" />
    </form>
  );
}
 
export default TodoForm;