import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function App() {
  const [inp, setInp] = useState(0);
  const [counter, setCounter] = useState(0);
  let count = useMemo(() => {
    let totalCount = 0;
    for (let i = 0; i <= inp; i++) {
      totalCount += i;
    }
    return totalCount;
  }, [inp]);

  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState("66025f8ebf13188543242543");

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <button
            value={todo._id}
            onClick={(e) => {
              setSelectedTodo(e.target.value);
            }}
          >
            {" "}
            {todo.title}
          </button>
        ))}
        <Todo id={selectedTodo} />
      </div>
      <input
        type="text"
        onChange={(e) => {
          setInp(e.target.value);
        }}
      ></input>
      <h4>Sum is {count}</h4>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/todo?id=" + id).then((res) => {
      setTodo(res.data.todoData[0]);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}
export default App;
