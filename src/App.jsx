import { useState } from "react";
import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import TodoCount from "./components/TodoCount.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <div className="container mx-auto max-w-md p-4 font-comic">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <FilterButtons handleFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <TodoCount count={todos.length} />
    </div>
  );
}

export default App;
