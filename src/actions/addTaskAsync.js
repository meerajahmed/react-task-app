export const ADD_TASK_ASYNC = 'ADD_TASK_ASYNC';

export default (task) => ({
  type: ADD_TASK_ASYNC,
  payload: {task}
});