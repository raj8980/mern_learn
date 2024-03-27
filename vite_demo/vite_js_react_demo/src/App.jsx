import { useEffect, useState } from "react";
import axios from "axios";


function App() {
 
  return (
      <div>
          <Todo id={"66025f8ebf13188543242543"} />
      </div>);
}

function Todo({id}){
  const [todo,setTodo] = useState({});

  useEffect(()=>{
    axios.get("http://localhost:3000/todo?id="+id)
    .then((res)=>{
        setTodo(res.data.todoData[0]);
    })

  },[]);
  console.log(todo);
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
