import React, { useContext } from "react";
import { TaskCountContext } from "../TextCountContext";
import { useNavigate } from "react-router-dom";

function Desktop() {
  //const history = useNavigate();
  //Use context for setting up the task count to be displayed on the Desktop component -
  const {
    totalTasks,
    setTotalTasks,
    pendingTasks,
    setPendingTasks,
    completedTasks,
    setCompletedTasks,
  } = useContext(TaskCountContext);
  console.log(
    `UseContext value: ${JSON.stringify(useContext(TaskCountContext))}`
  );
  const handleTaskManagement = (e) => {
    e.preventDefault();
    // history("/taskmanagement");
  };
  return (
    <div className="desktop container">
      <h2>Desktop</h2>
      <h4>Total tasks: {totalTasks}</h4>
      <h4>Pending tasks: {pendingTasks}</h4>
      <h4>Completed tasks: {completedTasks}</h4>
      {/* <div>
        <span>
          Go to{" "}
          <button className="btn btn-success" onClick={handleTaskManagement}>
            Task Management
          </button>
        </span>
      </div> */}
    </div>
  );
}

export default Desktop;
