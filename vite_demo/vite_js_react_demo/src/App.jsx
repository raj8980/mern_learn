import React, { Fragment, useState } from "react";

let counter =4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Go to Gym Today",
    },
    {
      id: 2,
      title: "eat food",
      description: "eat food Today",
    },
    {
      id: 3,
      title: "Learn mern",
      description: "Learn mern Today",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: "run",
        description: "run Today",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
    
    
    
      {todos.map((todo) => 
        <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      )}
    </div>
  );
}

function Todo({title,description}) {
  return <div >
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App;
