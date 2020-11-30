import React from "react";
import "./App.css";
import ListTask from "./ListTask.js";
import AddTask from "./Addtask.js";
import {Task} from "./Task.js";
import {useState} from 'react'



function App() {

  const [todos, setTodos] = useState(Task);  

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ListTask
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <div className="addtask" >
        <h3 className="h3">Add Task</h3>
        <AddTask addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;