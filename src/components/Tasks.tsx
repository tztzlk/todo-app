import React from 'react';



export type Task = {
  id: number; 
  title: string;
  completed: boolean;
};  


interface TasksProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onComplite: (id: number) => void;
}

 



const Tasks: React.FC<TasksProps> = ({ tasks, onDelete, onComplite }) => {
  const hasTasks = tasks.length > 0;
  if (!hasTasks) {
    return <p className="text-gray-400 m-10 text-left">No tasks available</p>;
  }



  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#15101C] w-full h-[75px] flex items-center justify-between p-6 rounded-xl mb-2"
        >
          <p className={`${task.completed ? "line-through text-green-400" : "text-white"}`}>
            {task.title}
          </p>
          <button className="text-sm  text-gray-400 hover:text-green-400"   onClick={() => onComplite( task.id)
          
          }>
            {task.completed ? "Выполнено" : "Выполнить"}    
          </button>
          <button onClick={() => onDelete(task.id)} className="text-sm text-gray-400 hover:text-red-400">
            Удалить 
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
