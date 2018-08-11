import {ADD_TASK} from '../actions/addTask';
import {UPDATE_TASK_STATUS} from '../actions/updateTaskStatus';

export default (state, {type, payload}) => {
  switch (type) {

    case ADD_TASK:
      const {task} = payload;
      return [...state, task];

    case UPDATE_TASK_STATUS:
      const {id, status} = payload;
      return state.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            status
          }
        }
        return task;
      });

    default:
      return state;

  }
}