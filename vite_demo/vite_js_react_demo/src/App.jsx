import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo,setSelectedTodo]= useState("66025f8ebf13188543242543");
  let count =1;
  let selected_id="66025f8ebf13188543242543";

     useEffect( ()=>{
        axios.get("http://localhost:3000/todos").then((res)=>{
          setTodos(res.data.todos)});
      },[]);

  return (
    <div>
        {todos.map(todo =>
        <button value={todo._id} onClick={(e)=>{
          setSelectedTodo(e.target.value);
        }}> {todo.title}</button>
        )}
        <Todo id={selectedTodo} />
    </div>);
}

function Todo({id}){
const [todo,setTodo] = useState({});

useEffect(()=>{
  axios.get("http://localhost:3000/todo?id="+id)
  .then((res)=>{
      setTodo(res.data.todoData[0]);
  })
},[id]);

return (<div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}  
    </h4>    
  </div>);
}


export default App;
