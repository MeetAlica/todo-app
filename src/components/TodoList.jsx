import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
