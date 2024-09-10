import React, { useState } from 'react';
import '../css/TaskList.css';
import CompletedTasks from './CompletedTasks';

export default function TaskList(props) {

  const {
    tasks,
    removeTask, 
    noNewTasks, 
    noCompletedTasks ,
    style
  } = props;
  
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
      <div className="container" style={style}>
        <h2 style={style}>Today's Tasks</h2>
        {tasks.length === 0 ? (
          <p style={style}>{noNewTasks}</p>
        ) : (
          <ul>
            {tasks.map((item, index) => (
              <li style={style} key={index} id={index}>
                <input type="checkbox" style={style} key={index} id={index} onChange={taskDoneFunction} />
                <label style={style} htmlFor={index}>{item}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="my-3">
        <CompletedTasks completedTasks={completedTasks} noCompletedTasks ={noCompletedTasks} style={style} />
      </div>
    </div>
  )
}
