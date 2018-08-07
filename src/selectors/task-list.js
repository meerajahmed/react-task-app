import {TASK_NOT_STARTED} from "../components/task";

export default (tasks, select = TASK_NOT_STARTED) => {
  return tasks.filter((task) => task.status === select);
}