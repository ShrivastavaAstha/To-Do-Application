import React, { useState } from "react";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";
import { Provider } from "react-redux";
import store from "./component/Store";
import "./App.css";
function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  const handleCancelTask = () => {
    setIsAddingTask(false);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React To-Do App</h1>
        {isAddingTask ? (
          <TaskInput onCancel={handleCancelTask} />
        ) : (
          <>
            <TaskList />
            <button
              onClick={handleAddTaskClick}
              style={{
                fontSize: "18px",
              }}
              className="add-card"
            >
              <span style={{ fontSize: "35px" }}>+ </span>Add New Task
            </button>
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;
