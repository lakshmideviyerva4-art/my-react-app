import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <h1>My React App</h1>
        <p className="subtitle">Simple Counter</p>

        <div className="counter">
          {count}
        </div>
        <div className="card">
  <h2>📝 To-Do List</h2>

  <input
    type="text"
    placeholder="Enter a task"
    value={task}
    onChange={(e) => setTask(e.target.value)}
  />

  <button onClick={addTask}>Add Task</button>

  <ul>
    {tasks.map((item, index) => (
      <li key={index}>
        {item}
        <button onClick={() => deleteTask(index)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>
            -
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
