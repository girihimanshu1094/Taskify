import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoStats from './components/TodoStats.jsx'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(taskText) {
    const newTodo = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }

    setTodos([...todos, newTodo])
  }

  function deleteAllTodos() {
    setTodos([]);
  }

  function toggleTodo(todoId) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  function deleteTodo(todoId) {
    const remainingTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(remainingTodos)
  }
 
  function editTodo(todoId) {
    console.log(todoId.text);
    const newText = prompt("Enter new task text:");
    if(newText) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, text: newText }
        }
        return todo
      })
      setTodos(updatedTodos)
    }
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const pendingCount = todos.length - completedCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col justify-center">
        <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Taskify - Simple Todo App
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              A todo list for your daily tasks
            </p>
          </div>

          <TodoForm onAddTodo={addTodo} onDeleteAllTodos={deleteAllTodos} />

          <TodoStats
            totalTasks={todos.length}
            completedTasks={completedCount}
            pendingTasks={pendingCount}
          />

          <div className="mt-6 space-y-3">
            {todos.length === 0 ? (
              <p className="rounded-xl border border-dashed border-gray-300 p-5 text-center text-gray-500">
                No tasks yet. Add your first task above!
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggleTodo={toggleTodo}
                  onDeleteTodo={deleteTodo}
                  onEditTodo={editTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
