import React, { useState } from 'react';

function Header({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedValue = inputValue.trim();
    
    // Form validation
    if (!trimmedValue) {
      setError('Please enter a task');
      return;
    }
    
    if (trimmedValue.length > 100) {
      setError('Task is too long (max 100 characters)');
      return;
    }
    
    // Call parent function to add todo
    onAddTodo(trimmedValue);
    
    // Reset form
    setInputValue('');
    setError('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) setError(''); // Clear error when user starts typing
  };

  return (
    <header className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          My To-Do List 📋
        </h1>
        <p className="text-gray-600 text-base">
          Stay organized and productive with your tasks
        </p>
      </div>
      
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          <div className="flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter a new task... (e.g., Complete React assignment)"
              className={`w-full h-12 px-5 text-base border rounded-lg focus:outline-none transition-all duration-200 text-gray-700 ${
                error 
                  ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-200'
                  : 'border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-200'
              }`}
              maxLength={100}
              autoFocus
            />
            
            {/* Character counter */}
            <div className="flex justify-between items-center mt-1">
              {error && (
                <p className="text-red-500 text-xs">{error}</p>
              )}
              <div className="ml-auto">
                <span className={`text-xs ${
                  inputValue.length > 80 ? 'text-red-500' : 'text-gray-400'
                }`}>
                  {inputValue.length}/100
                </span>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="h-12 px-6 bg-blue-500 hover:bg-blue-600 text-white text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 shadow-sm flex items-center gap-2.5 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Task
          </button>
        </div>
        
      </form>
    </header>
  );
}

export default Header;