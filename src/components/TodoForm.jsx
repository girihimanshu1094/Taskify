import { useState } from 'react'

function TodoForm({ onAddTodo, onDeleteAllTodos }) {
  const [taskText, setTaskText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    // trim removes extra spaces so blank tasks cannot be added.
    const cleanTaskText = taskText.trim()

    if (cleanTaskText === '') {
      setErrorMessage('Please enter a task before adding.')
      return
    }

    onAddTodo(cleanTaskText)
    setTaskText('')
    setErrorMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="Enter a new task"
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Add Task
        </button>

        <button
          type="button"
          onClick={onDeleteAllTodos}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Delete All
        </button>
      </div>

      {errorMessage && (
        <p className="mt-2 text-sm font-medium text-red-500">{errorMessage}</p>
      )}
    </form>
  )
}

export default TodoForm
