import React, { useState, useEffect, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddTask from "./AddTask";
import Task from "./Task";
import { TaskCountContext } from "../TextCountContext";
let tsks = [
  { name: "Task1", stage: 0, priority: "high", deadline: "2022-02-15" },
  { name: "Task2", stage: 0, priority: "low", deadline: "2022-02-18" },
  { name: "Task3", stage: 1, priority: "medium", deadline: "2022-02-21" },
  { name: "Task4", stage: 2, priority: "high", deadline: "2022-02-17" },
  { name: "Task5", stage: 3, priority: "medium", deadline: "2022-02-16" },
  { name: "Task6", stage: 2, priority: "low", deadline: "2022-02-19" },
  { name: "Task7", stage: 3, priority: "high", deadline: "2022-02-20" },
];
const snames = ["Backlog", "To Do", "Ongoing", "Done"];

function TaskManagement(props) {
  const [stageNames, setStageNames] = useState(snames);
  const [tasks, setTasks] = useState(tsks);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  //   const {
  //     tasks,
  //     setTasks,
  //     stageNames,
  //     setStageNames,
  //     title,
  //     setTitle,
  //     priority,
  //     setPriority,
  //     deadline,
  //     setDeadline,
  //   } = props;

  //Use context for setting up the task count to be displayed on the Desktop component -
  const {
    totalTasks,
    setTotalTasks,
    pendingTasks,
    setPendingTasks,
    completedTasks,
    setCompletedTasks,
  } = useContext(TaskCountContext);

  const setTaskCount = () => {
    const pendingTasks = tasks.filter((t) => t.stage === 2);
    const completedTasks = tasks.filter((t) => t.stage === 3);
    setTotalTasks(tasks.length);
    setPendingTasks(pendingTasks.length);
    setCompletedTasks(completedTasks.length);
  };

  //Set different task counts - Total tasks, pending tasks and completed tasks
  useEffect(() => {
    setTaskCount();
  }, [tasks, setTasks]);

  //All stages
  const stages = [];
  //Initialize the array of stages.
  for (let i = 0; i < stageNames.length; i++) {
    stages.push([]);
  }
  //Put task as per their stages inside the stage array
  for (let task of tasks) {
    stages[task.stage].push(task);
  }

  const addTask = () => {
    const ts = tasks;
    if (title && !isEdit) {
      ts.push({
        name: title,
        stage: 0,
        priority: priority,
        deadline: deadline,
      });
    }
    if (title && isEdit) {
      let taskTobeEdited = ts.find((t) => t.name === title);
      let editIndex = ts.indexOf(taskTobeEdited);
      console.log(
        `edit index - ${editIndex} name - ${title} priority: ${priority} deadline - ${deadline}`
      );
      let editedTask = {
        name: title,
        stage: taskTobeEdited.stage,
        priority: priority,
        deadline: deadline,
      };
      ts.splice(editIndex, 1, editedTask);
      // console.log(ts.splice(editIndex, 1, editedTask));
      //console.log(ts);
    }

    setTitle("");
    setPriority("");
    setDeadline("");
    setIsEdit(false);
    setTasks(ts);
    //Update different task counts
    setTaskCount();
  };
  const backwardBtnHandler = (name) => {
    let ts = [];
    ts = tasks.map((t) => {
      if (t.name === name) {
        return {
          name: t.name,
          priority: t.priority,
          deadline: t.deadline,
          stage: t.stage === 0 ? 0 : t.stage - 1,
        };
      } else return t;
    });
    setTasks(ts);
  };
  const forwardBtnHandler = (name) => {
    let ts = [];
    ts = tasks.map((t) => {
      if (t.name === name) {
        return {
          name: t.name,
          priority: t.priority,
          deadline: t.deadline,
          stage: t.stage === 3 ? 3 : t.stage + 1,
        };
      } else return t;
    });
    setTasks(ts);
  };
  const deleteBtnHandler = (name) => {
    const ts = tasks.filter((t) => t.name !== name);
    setTasks(ts);
  };

  const editBtnHandler = (name) => {
    setIsEdit(true);
    let taskTobeEdited = tasks.find((t) => t.name === name);
    setTitle(taskTobeEdited.name);
    setPriority(taskTobeEdited.priority);
    setDeadline(taskTobeEdited.deadline);
  };

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <h2>Task Management</h2>
      {/* <h3>Total tasks: {totalTasks}</h3>
      <h3>Pending tasks: {pendingTasks}</h3>
      <h3>Completed tasks: {completedTasks}</h3> */}
      <section className="mt-50 layout-row align-items-center justify-content-center">
        <AddTask
          taskTitle={title}
          onTaskTitleChange={setTitle}
          taskPriority={priority}
          onTaskPriorityChange={setPriority}
          taskDeadline={deadline}
          onTaskDeadlineChange={setDeadline}
          addTask={addTask}
          isEdit={isEdit}
        />
      </section>
      <div className="stages mt-20">
        {stages.map((tasks, i) => {
          return (
            <div className="stageCard card outlined" key={`${i}`}>
              <div className="card-text">
                <h4>{stageNames[i]}</h4>
                <ul className="mt-50">
                  {tasks.map((task, index) => {
                    return (
                      <li key={`${i}${task.name}`}>
                        {/* <span>{task.name}</span>
                        <button
                          onClick={() => backwardBtnHandler(task.name)}
                          className="icon-only"
                        >
                          <i className="material-icons">B</i>
                        </button>
                        <button
                          onClick={() => forwardBtnHandler(task.name)}
                          className="icon-only"
                        >
                          <i className="material-icons">F</i>
                        </button>
                        <button
                          onClick={() => deleteBtnHandler(task.name)}
                          className="icon-only"
                        >
                          <i className="material-icons">D</i>
                        </button> */}
                        <Task
                          taskname={task.name}
                          taskpriority={task.priority}
                          taskdeadline={task.deadline}
                          backwardBtnHandler={() =>
                            backwardBtnHandler(task.name)
                          }
                          forwardBtnHandler={() => forwardBtnHandler(task.name)}
                          deleteBtnHandler={() => deleteBtnHandler(task.name)}
                          editBtnHandler={() => editBtnHandler(task.name)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskManagement;
