import "./App.css";
import TaskManagement from "./components/TaskManagement";
import React, { useState } from "react";
import Desktop from "./components/Desktop";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TaskCountContext, TaskCountContextProvider } from "./TextCountContext";
import Login from "./components/Login";
function App() {
  return (
    <TaskCountContextProvider>
      <div className="App">
        <h2>Kanban Board</h2>
        <Desktop />
        <TaskManagement />
      </div>
    </TaskCountContextProvider>
  );
}

export default App;
