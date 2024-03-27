import { useState } from "react";

export function CreateTodo() {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
  
    return (
    <div>
      <input style={{ padding: 10,margin: 10 }}
        onChange = {(e)=>{ 
             setTitle(e.target.value)
        // console.log(e.target.value, title);
                        
        }}
        type="text" placeholder="title"></input>
      <input
        style={{ padding: 10,margin: 10 }}
        onChange = {(e)=>{ setDescription(e.target.value) }}
        type="text" placeholder="description"></input>
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={ ()=>{
             fetch("http://localhost:3000/add-todo",
            {
                method:"POST",
                body : JSON.stringify({
                    title : title ,
                    description : description 
                }),
                headers:{
                    "Content-Type" : "application/json"
                }
            }).then(async (res) =>{
                const json = await res.json();
               fetch("http://localhost:3000/todos").then(async (res)=>{
                  const json = await res.json();
                  setTodos(json.todos);
                });
              
            });
        }}
      >Add a todo</button>
    </div>
  );
}
