import React from "react";

function Task(props) {
  const {
    taskname,
    taskpriority,
    taskdeadline,
    backwardBtnHandler,
    forwardBtnHandler,
    deleteBtnHandler,
    editBtnHandler
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
        <button onClick={() => backwardBtnHandler(taskname)}>
          <i>Backward</i>
        </button>
        <button onClick={() => forwardBtnHandler(taskname)}>
          <i>Forward</i>
        </button>
        <button onClick={() => deleteBtnHandler(taskname)}>
          <i>Delete</i>
        </button>
      </div>
      <div>
        <button onClick={()=>editBtnHandler(taskname)}>
          <i>Edit</i>
        </button>
      </div>
    </div>
  );
}

export default Task;
