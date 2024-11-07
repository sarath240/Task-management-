import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [timeLeft, setTimeLeft] = useState("");

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text: taskInput,
      priority,
      timeLeft,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
    setPriority("Medium");
    setTimeLeft("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div>
      <h3>Task List</h3>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Task description"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="text"
        value={timeLeft}
        onChange={(e) => setTimeLeft(e.target.value)}
        placeholder="Time left (e.g., 2 days)"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} - Priority: {task.priority} - Time left: {task.timeLeft}
            <button onClick={() => removeTask(task.id)}>Remove</button>
            {!task.completed && (
              <button onClick={() => markCompleted(task.id)}>
                Mark Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
