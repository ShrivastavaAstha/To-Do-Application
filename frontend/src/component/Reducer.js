const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Load tasks from local storage
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: newTasks,
      };
    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      if (filteredTasks.length === 0) {
        localStorage.removeItem("tasks"); // Clear local storage if no tasks left
      } else {
        localStorage.setItem("tasks", JSON.stringify(filteredTasks)); // Save tasks to local storage
      }
      return {
        ...state,
        tasks: filteredTasks,
      };
    case "TOGGLE_TASK":
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};

export default reducer;
