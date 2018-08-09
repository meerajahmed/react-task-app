import {connect} from "react-redux";

import TaskApp from "../components/task-app";
import addTask from "../actions/addTask";
import updateTaskStatus from "../actions/updateTaskStatus";

const mapStateToProps = (state) => ({tasks: state});

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: (task) => dispatch(addTask(task)),
  handleStatusChange: (id, status) => dispatch(updateTaskStatus(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskApp);