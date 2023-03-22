import "./App.css";
import TaskScreen from "./screens/TaskScreen";
import { useState } from "react";

function App() {
  const [isModeDark, setIsModeDark] = useState(false);

  return (
    <div className={isModeDark ? "theme-dark" : "theme"}>
      <h1>
        Welcome to To Do List Application.
        <button onClick={(_e) => setIsModeDark(!isModeDark)}>
          Toggle Mode
        </button>
      </h1>
      <TaskScreen /> {/* This is like a function call */}
    </div>
  );
}

export default App;

// What is a React Component?

// A React Component is LIKE a function.
// It takes in zero or a few arguments.
// It always returns some UI in form of JSX.
// A React Component can be represented by a JS class or a JS function.

// JSX -> JavaScript XML
// It is like HTML, but it also supports React Components
// You can also write JS code inside JSX.
