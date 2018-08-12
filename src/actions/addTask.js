export const ADD_TASK = 'ADD_TASK';

export default ({task}) => ({
  type: ADD_TASK,
  payload: {task}
});