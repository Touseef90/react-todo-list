import './App.css';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
