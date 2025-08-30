import './App.css'
import { useState } from 'react';
import  {Task}  from './components/Tasks';
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import React from 'react'
import Done from './components/Done';


const App:React.FC = () => {  
 
    const [tasks, setTasks] = useState<Task[]>([]);
    const addTask = (title: string) => {
    setTasks([
      {
      id: Date.now(),
      title,
      completed: false
    },

    ...tasks,
  ])
};

const deleteTask = (id: number) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

  const compliteTask = (id: number) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className='Main'>
        <AddTask onAdd = {addTask}/> 
        <Tasks tasks={tasks} onComplite = {compliteTask}  onDelete={deleteTask}/>
        <Done tasks={tasks} />
    </div>

    
  )
}

export default App
