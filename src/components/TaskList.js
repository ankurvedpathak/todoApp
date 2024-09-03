import React from 'react'

export default function TaskList(props) {
  return (
    <div>
        <ul>
            {props.tasks.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}
