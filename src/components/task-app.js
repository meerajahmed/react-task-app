import React, {Component} from 'react';
import AddTask from "./add-task";
import TaskListView from "./task-list-view";

const TaskApp = (props) => (
  <div className="container my-5">
    <AddTask handleAddTask={props.handleAddTask}/>
    { props.tasks.length > 0 &&
    <TaskListView tasks={props.tasks} handleStatusChange={props.handleStatusChange}/> }
  </div>
);

export default TaskApp;