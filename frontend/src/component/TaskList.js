import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./Action";
import TaskInput from "./TaskInput";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleTask(id));
  };

  const getStatusButton = (completed) => {
    switch (completed) {
      case true:
        return { text: "Completed", color: "green", border: "2px solid green" };
      case false:
        return {
          text: "On-Going",
          color: "yellow",
          border: "2px solid yellow",
        };
      default:
        return { text: "To-Do", color: "#e04d1c", border: "2px solid #e04d1c" };
    }
  };

  return (
    <>
      <h2 style={{ color: "black", marginLeft: "20px" }}>
        <u style={{ color: "green" }}>All</u> Tasks
      </h2>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3> {task.title}</h3>

            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <br />
            <br />
            <p style={{ fontSize: "14px", fontStyle: "italic" }}>
              Date: {task.date}
            </p>

            <button
              onClick={() => handleToggleStatus(task.id)}
              style={{
                backgroundColor: getStatusButton(task.completed).color,
                border: getStatusButton(task.completed).border,
              }}
              className="btn"
            >
              {getStatusButton(task.completed)?.text}
            </button>

            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                backgroundColor: "transparent",
                border: "2px solid transparent",
                position: "absolute",
                bottom: "5px",
                right: "5px",
              }}
            >
              <DeleteIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                }}
              />
            </button>
          </div>
        ))}
        {/* <div className="add-card">
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "13px",
            }}
          >
            <b>+ Add New Task</b>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default TaskList;
