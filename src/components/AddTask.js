import React from "react";

function AddTask(props) {
  return (
    <div className="addTaskContainer container">
      <div className="row">
        <label className="col-4">Enter task title</label>
        <input
          className="col-6"
          type="text"
          value={props.taskTitle}
          onChange={(e) => props.onTaskTitleChange(e.target.value)}
        />
      </div>
      <div className="row">
        <label className="col-4">Enter task priority</label>
        <select
          className="col-6"
          onChange={(e) => props.onTaskPriorityChange(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="row">
        <label className="col-4">Enter task deadline</label>
        <input
          className="col-6"
          type="date"
          value={props.taskDeadline}
          onChange={(e) => props.onTaskDeadlineChange(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={props.addTask}>
          Save Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
