import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./Action";

const TaskInput = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim() || text.trim()) {
      dispatch(addTask(title, date, text));
      setTitle("");
      setDate("");
      setText("");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Task Title"
      />
      <br />
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        placeholder="Task Date"
      />
      <br />
      <textarea
        type="text"
        value={text}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
        placeholder="Task Description"
      />
      <br />
      <button
        onClick={handleAddTask}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
