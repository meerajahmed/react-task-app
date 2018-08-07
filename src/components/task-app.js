import React, {Component} from 'react';
import AddTask from "./add-task";
import TaskListView from "./task-list-view";

export default class TaskApp extends Component {

  state = {
    tasks: []
  };

  handleSaveTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task]
    }));
  };

  handleStatusChange = (id, status) => {
    this.setState((prevState) => {
      let tasks = prevState.tasks.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            status
          }
        }
        return task;
      });
      return {tasks}
    });
  };

  render() {
    return (
      <div className="container my-5">
        <AddTask handleSaveTask={this.handleSaveTask}/>
        { this.state.tasks.length > 0 &&
        <TaskListView tasks={this.state.tasks} handleStatusChange={this.handleStatusChange}/> }
      </div>
    );
  }
}