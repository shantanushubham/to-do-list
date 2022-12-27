import React, { useState } from "react";
import Task from "../components/Task";

const TASKS = [
  {
    title: "Do Homework",
    status: true,
    desc: "Important!",
    createdOn: new Date(),
  },
  {
    title: "Do Cooking",
    status: true,
    desc: "Important!",
    createdOn: new Date(),
  },
  {
    title: "Do Cleaning",
    status: true,
    desc: "Important!",
    createdOn: new Date(),
  },
  {
    title: "Do Laundry",
    status: true,
    desc: "Important!",
    createdOn: new Date(),
  },
];

const INITIAL_VALUE = {
  title: "",
  desc: "",
  status: false,
  createdOn: new Date(),
};

function TaskScreen() {
  const [taskList, setTaskList] = useState(TASKS);
  const [newTask, setNewTask] = useState(INITIAL_VALUE);

  return (
    <div>
      <h6>Add New Task:</h6>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTaskList([...taskList, newTask]);
          setNewTask(INITIAL_VALUE);
        }}
      >
        <input
          type={"text"}
          placeholder={"Add Title"}
          onChange={(e) => {
            setNewTask({ ...newTask, title: e.target.value });
          }}
          value={newTask.title}
        />

        <input
          type={"text"}
          placeholder={"Add Description"}
          onChange={(e) => {
            setNewTask({ ...newTask, desc: e.target.value });
          }}
          value={newTask.desc}
        />

        <button type="submit">Add Task</button>
      </form>

      {taskList.map(function (task, index) {
        return <Task task={task} key={index} setStatus={function(index) {
          let tempTaskList = [...taskList];
          tempTaskList[index].status = !tempTaskList[index].status;
          setTaskList(tempTaskList)
        }} index={index}/>;
      })}
    </div>
  );
}

export default TaskScreen;

// <array>.map is a function that returns a new array
// It takes 1 arg which is a function
// This arg function takes 2 arguments,
// 1. Element inside the <array>
// 2. Index (optional)
// It returns how the element needs to be transformed
// and stored in the new array

// State:
// State is a variable which when changed requires
// the component to refresh

// useState:
// It is a func that returns 2 things
// 1. The state variable
// 2. The function to change the state variable.
// The arg passed is the initial value of the state.
