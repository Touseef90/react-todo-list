import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/todos')
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const addTodo = (title, description) => {
    console.log(title, description);
    axios.post('https://localhost:5001/api/todos', {
      title, description
    })
    .then(res => {
      setTodos([...todos, {title, description, id: res.data.id}])
    })
    .catch(err => {
      console.log(err);
    })
  }

  const removeTodo = (id) => {
    axios.delete(`https://localhost:5001/api/todos/${id}`)
      .then(res => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );

}
 
export default TodoContextProvider;
