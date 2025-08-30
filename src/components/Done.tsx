import React from 'react';
import { Task } from './Tasks';

interface DoneProps {
  tasks: Task[];
}

const Done: React.FC<DoneProps> = ({ tasks }) => {
  const doneCount = tasks.filter(task => task.completed).length;

  return (
    <div>
      <p className="text-green-400 m-10 text-left">Выполнено — {doneCount}</p>
          
    </div>
  );
};

export default Done;