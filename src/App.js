import React, { useState } from "react";

import Form from "./Form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);
  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) => (k === i ? { ...todo, complete: !todo.complete } : todo)
      )
    );

  return (
    <div className="App">
      <Form
        onSubmit={text => setTodos([...todos, { text, complete: false }])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
            key={text}
            onClick={() => toggleComplete(i)}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
};
