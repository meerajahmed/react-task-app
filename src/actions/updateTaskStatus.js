export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

export default (id, status) => ({
  type: UPDATE_TASK_STATUS,
  payload: {id, status}
});