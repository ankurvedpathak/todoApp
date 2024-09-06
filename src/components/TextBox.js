import React, { useEffect, useState } from 'react'
import TaskList from './TaskList';

export default function TextBox() {
    const [text, setText] = useState("");
    const [taskList, setTaskList] = useState([]);
    const onSubmit = () => {
        if (text){
            console.log(text);
            setTaskList(prevList => [...prevList, text]);
            setText("");
        }
    }

    const addTask = (event) => {
        setText(event.target.value);
    }

    const removeTask = (id) => {
        console.log("removing task");
        console.log(id);
        console.log(typeof(id));
        var numericId = parseInt(id);
        console.log(typeof(numericId));
        setTaskList(prevItems => prevItems.filter((value, key) => key !== numericId));
    }

    // useEffect(() => {
    //     console.log(taskList);
    // },[taskList]);

    return (
        <>
            <div className="input-group my-3">
                <span className="input-group-text">What are your tasks today?</span>
                <textarea className="form-control" aria-label="With textarea"
                    onChange={addTask} value={text}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>Add Task</button>
            <TaskList tasks={taskList} removeTask={removeTask} />
        </>
    )
}
