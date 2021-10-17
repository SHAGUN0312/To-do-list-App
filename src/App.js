import React, { useState } from "react";
import './App.css'
//importing Components
import Form from "./components/form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>My Todo List!</h1>
      </header>
      <Form 
      todos={todos}
      setTodos={setTodos} 
      setInputText = {setInputText} 
      inputText = {inputText}
      />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
