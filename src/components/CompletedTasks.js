import React from 'react';
import '../css/CompletedTasks.css';

export default function CompletedTasks(props) {
    return (
        <div>
            <div>
                <div className="container">
                    <h2>Completed Tasks</h2>
                    <ul>
                        {props.completedTasks.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
