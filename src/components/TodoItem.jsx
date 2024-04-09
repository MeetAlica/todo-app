const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <li className="flex items-center justify-between py-4">
      <span
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : "text-gray-900"
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => toggleTodo(todo.id)}
        className="ml-4 px-2 py-1 rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white"
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
};

export default TodoItem;
