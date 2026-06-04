function TodoStats({ totalTasks, completedTasks, pendingTasks }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div className="rounded-xl bg-blue-50 p-4 text-center">
        <p className="text-2xl font-bold text-blue-700">{totalTasks}</p>
        <p className="text-sm text-gray-600">Total Tasks</p>
      </div>

      <div className="rounded-xl bg-green-50 p-4 text-center">
        <p className="text-2xl font-bold text-green-700">{completedTasks}</p>
        <p className="text-sm text-gray-600">Completed</p>
      </div>

      <div className="rounded-xl bg-yellow-50 p-4 text-center">
        <p className="text-2xl font-bold text-yellow-700">{pendingTasks}</p>
        <p className="text-sm text-gray-600">Pending</p>
      </div>
    </div>
  )
}

export default TodoStats
