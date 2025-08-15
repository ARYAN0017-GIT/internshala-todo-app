import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  // Main state management using React hooks
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Complete React assignment with Tailwind",
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      text: "Study React hooks and state management", 
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      text: "Set up GitHub repository",
      completed: true,
      createdAt: new Date().toISOString()
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);

  // Add new todo - event handler for Header component
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  // Toggle todo completion status
  const handleToggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo item
  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Start editing a todo
  const handleEditTodo = (id) => {
    setEditingId(id);
  };

  // Save edited todo
  const handleSaveTodo = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditingId(null);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header Component - contains title and add todo form */}
        <Header onAddTodo={handleAddTodo} />
        
        {/* Main Content */}
        <div className="mt-8">
          {/* Statistics Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{todos.length}</div>
                <div className="text-sm text-blue-600 font-medium">Total Tasks</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {todos.filter(todo => todo.completed).length}
                </div>
                <div className="text-sm text-green-600 font-medium">Completed</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {todos.filter(todo => !todo.completed).length}
                </div>
                <div className="text-sm text-orange-600 font-medium">Pending</div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['all', 'active', 'completed'].map(filterType => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === filterType
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                <span className="ml-2 text-xs opacity-75">
                  ({filterType === 'all' ? todos.length : 
                    filterType === 'active' ? todos.filter(t => !t.completed).length :
                    todos.filter(t => t.completed).length})
                </span>
              </button>
            ))}
          </div>

          {/* TodoList Component - renders all todos */}
          <TodoList
            todos={filteredTodos}
            editingId={editingId}
            onToggle={handleToggleTodo}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
            onSave={handleSaveTodo}
            onCancel={handleCancelEdit}
          />

          {/* Empty State */}
          {filteredTodos.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {filter === 'all' ? 'No tasks yet' : 
                 filter === 'active' ? 'No active tasks' : 'No completed tasks'}
              </h3>
              <p className="text-gray-500">
                {filter === 'all' ? 'Add your first task above to get started!' :
                 filter === 'active' ? 'All your tasks are completed!' :
                 'Complete some tasks to see them here.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;