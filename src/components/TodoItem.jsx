function TodoItem({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) {
  return (
    <>
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          className="h-5 w-5 cursor-pointer rounded border-gray-300 text-blue-600"
        />

        <span
          className={
            todo.completed
              ? 'text-gray-400 line-through'
              : 'text-gray-800'
          }
        >
          {todo.text}
        </span>
      </label>

      <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onEditTodo(todo.id)}
        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => onDeleteTodo(todo.id)}
        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
      >
        Delete
      </button>
      </div>
    </div>
    </>
  )
}

export default TodoItem
