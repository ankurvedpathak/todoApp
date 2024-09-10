import React from 'react';
import '../css/CompletedTasks.css';

export default function CompletedTasks(props) {
    const {
        completedTasks,
        style
    } = props;
    return (
        <div>
            <div>
                <div className="container" style={style}>
                    <h2 style={style}>Completed Tasks</h2>
                    <ul>
                        {props.completedTasks.map((item, index) => (
                            <li style={style} key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
