import React, { useState } from 'react'
import TaskList from './TaskList';
import Banner from './Banner';

export default function TextBox(props) {
    const {
        taskCreated,
        taskWarning,
        taskCompleted,
        success,
        warning,
        noNewTasks,
        noCompletedTasks,
        style
    } = props;
    const [text, setText] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [bannerText, setBannerText] = useState(null);


    // Function to add a new task
    const onSubmit = () => {
        if (text) {
            console.log(text);
            setTaskList(prevList => [...prevList, text]);
            showBanner(taskCreated, success);
            setText("");
        } else {
            showBanner(taskWarning, warning);
        }
    }

    // To show banner in case of any action performed
    const showBanner = (message, type) => {
        setBannerText({
            message: message,
            type: type
        });
        setTimeout(() => {
            setBannerText(null);
        }, 2000);
    }

    // onchangehandler to allow to enter new characters in textbox
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    // Function to remove task from the main list and move to completed task list
    const removeTask = (id) => {
        var numericId = parseInt(id);
        setTaskList(prevItems => prevItems.filter((value, key) => key !== numericId));
        showBanner(taskCompleted, success);
    }

    return (
        <>
            <Banner bannerText={bannerText} />
            <div className="input-group my-3" style={style}>
                <span className="input-group-text" style={style}>What are your tasks today?</span>
                <textarea className="form-control" style={style} aria-label="With textarea"
                    onChange={onChangeHandler} value={text}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-3" onClick={onSubmit}>Add Task</button>
            <TaskList
                tasks={taskList}
                noNewTasks={noNewTasks}
                removeTask={removeTask}
                noCompletedTasks={noCompletedTasks}
                style={style} />
        </>
    )
}
