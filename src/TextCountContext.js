import React, { useState, createContext } from "react";

const TaskCountContext = createContext("");
const TaskCountContextProvider = ({ children }) => {
  const [totalTasks, setTotalTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  return (
    <TaskCountContext.Provider
      value={{
        totalTasks,
        setTotalTasks,
        pendingTasks,
        setPendingTasks,
        completedTasks,
        setCompletedTasks,
      }}
    >
      {children}
    </TaskCountContext.Provider>
  );
};

export { TaskCountContext, TaskCountContextProvider };
