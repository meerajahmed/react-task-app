import React from 'react';
import AddTask from "./add-task";
import TaskList from "./task-list";

const TaskApp = () => {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TaskApp;