import React from 'react';
import './TaskList.css';

function TaskList({ tasks, completeTask, deleteTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'lightgrey' : 'black' }}>
                    <span onClick={() => completeTask(index)}>{task.text}</span>
                    <button onClick={() => deleteTask(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
