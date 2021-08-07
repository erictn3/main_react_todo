import React, { useState, useEffect } from "react";

import './App.css';
// importing components 
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed===false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }

  // Save to local storage
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  return (
    <div className="App">
      <header>
        Test this out 
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
