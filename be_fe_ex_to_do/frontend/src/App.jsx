import { useState } from 'react'
import './App.css'
import  {CreateTodo}  from './components/CreateTodo';
import { Todo } from './components/Todo';


function App() {

  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async (res)=>{
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App
