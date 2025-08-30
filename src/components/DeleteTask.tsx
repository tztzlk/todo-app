import React from 'react';

type DeleteTaskProps = {
  className?: string;
  children?: React.ReactNode;
};

const DeleteTask: React.FC<DeleteTaskProps> = ({ className, children }) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default DeleteTask;