import React, { useState } from 'react';
import '../css/TaskList.css';
import CompletedTasks from './CompletedTasks';

export default function TaskList(props) {

  const {tasks, removeTask } = props;
  const [completedTasks, setCompletedTasks] = useState([]);
  const taskDoneFunction = (event) => {
    const { id, checked } = event.target;
    console.log("checkbox selected");
    if (checked) {
      setCompletedTasks(prevValues => [...prevValues, props.tasks[id]]);
      removeTask(id);
    }
  }
  return (
    <div>
      <div className="container">
        <h2>Today's Tasks</h2>
        <ul>
          {tasks.map((item, index) => (
            <li key={index} id={index}>
              <input type="checkbox" key={index} id={index} onChange={taskDoneFunction} />
              <label htmlFor={index}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <CompletedTasks completedTasks={completedTasks} />
      </div>
    </div>
  )
}
