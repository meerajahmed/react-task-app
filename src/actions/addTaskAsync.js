export const ADD_TASK = 'ADD_TASK';

const addTask = (task) => ({
  type: ADD_TASK,
  payload: {task}
});