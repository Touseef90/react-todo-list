import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
  
  const { todos } = useContext(TodoContext);

  return (
    <div className="navbar">
      <h1>Todos List</h1>
      <p>Currently you have {todos.length} todos to get through...</p>
    </div>
  );
}
 
export default Navbar;