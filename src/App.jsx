import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { todoReducer, initialState, ACTIONS } from './todoReducer';
import './App.css';
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList
        todos={todos}
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;
