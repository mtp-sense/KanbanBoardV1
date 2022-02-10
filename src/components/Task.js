import React from "react";

function Task(props) {
  const {
    taskname,
    taskpriority,
    taskdeadline,
    backwardBtnHandler,
    forwardBtnHandler,
    deleteBtnHandler,
  } = props;
  return (
    <div className="card task">
      <div>
        <h6>
          <u>Title:</u> {taskname}
        </h6>
        <h6>
          <u>Priority:</u> {taskpriority}
        </h6>
        <h6>
          <u>Deadline:</u> {taskdeadline}
        </h6>
      </div>
      <div className="taskButtons">
        <button
          onClick={() => backwardBtnHandler(taskname)}
          className="icon-only"
        >
          <i className="material-icons">Backward</i>
        </button>
        <button
          onClick={() => forwardBtnHandler(taskname)}
          className="icon-only"
        >
          <i className="material-icons">Forward</i>
        </button>
        <button
          onClick={() => deleteBtnHandler(taskname)}
          className="icon-only"
        >
          <i className="material-icons">Delete</i>
        </button>
      </div>
    </div>
  );
}

export default Task;
