import React, { useState } from 'react';
import './AddTask.css';

function AddTask({ addTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addTask(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">AGREGAR TAREA</button>
        </form>
    );
}

export default AddTask;
