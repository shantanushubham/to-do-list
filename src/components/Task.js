import React, { useState } from "react";

function Task(props) {
  const { title, status, desc, createdOn } = props.task;

  return (
    <div>
      <h3>{title}</h3>
      <span onClick={() => props.setStatus(props.index)}>
        {status ? "Done" : "Not Done"}
      </span>
      <p>{desc}</p>
      <p>Created on: {createdOn.toLocaleDateString()}</p>
    </div>
  );
}

export default Task;

// Props
// Props are values that are passed during calling
// a component.
// It is passed from parent comp to child comp
// Inside the child component, if it is a JS func, use
// props as a functional argument
// If it is a JS class, use this.props
