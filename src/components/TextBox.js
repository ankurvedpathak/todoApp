import React, { useEffect, useState } from 'react'
import TaskList from './TaskList';

export default function TextBox() {
    const [text, setText] = useState("");
    const [taskList, setTaskList] = useState([]);
    const onSubmit = () => {
        setTaskList(prevList => [...prevList, text]);
        setText("");
    }

    // useEffect(() => {
    //     console.log(taskList)
    //     console.log(taskList.length);
    // }, [taskList]);

    const onValueChangeHandler = (event) => {
        setText(event.target.value);
    }
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={onValueChangeHandler} rows="3" value={text}></textarea>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            <TaskList tasks={taskList} />
        </div>
    )
}
