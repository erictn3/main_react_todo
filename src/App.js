import React, { useState } from "react";

import './App.css';
// importing components 
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        Test this out 
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
