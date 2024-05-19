import React, { useState } from 'react';
import TaskList from './componentes/taskList/TaskList';
import AddTask from './componentes/addTask/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>LISTA DE TAREAS</h2>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
