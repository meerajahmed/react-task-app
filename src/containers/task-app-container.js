import {connect} from "react-redux";

import TaskApp from "../components/task-app";
import updateTaskStatus from "../actions/updateTaskStatus";
import addTaskAsync from "../actions/addTaskAsync";

const mapStateToProps = (state) => ({tasks: state});

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: (task) => dispatch(addTaskAsync(task)),
  handleStatusChange: (id, status) => dispatch(updateTaskStatus(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskApp);