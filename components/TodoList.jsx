import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ 
  todos, 
  editingId, 
  onToggle, 
  onEdit, 
  onDelete, 
  onSave, 
  onCancel 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* List Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Your Tasks
          <span className="text-sm font-normal text-gray-600">
            ({todos.length} {todos.length === 1 ? 'task' : 'tasks'})
          </span>
        </h2>
      </div>

      {/* Todo Items */}
      {todos.length > 0 ? (
        <ul className="divide-y divide-gray-100">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}  // Unique key for React reconciliation
              todo={todo}
              isEditing={editingId === todo.id}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
              onSave={onSave}
              onCancel={onCancel}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <div className="p-12 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">
            No tasks to show
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Add a task above to get started!
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoList;