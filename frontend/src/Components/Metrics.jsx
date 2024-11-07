import React from "react";

const Metrics = ({ tasks }) => {
  const currentTime = new Date();
  const oneWeekAgo = new Date(currentTime);
  oneWeekAgo.setDate(currentTime.getDate() - 7);
  const oneMonthAgo = new Date(currentTime);
  oneMonthAgo.setMonth(currentTime.getMonth() - 1);

  const completedOnTime = (task) => {
    const taskTime = new Date(task.timeLeft); // Assuming timeLeft is a valid date string for this purpose
    return task.completed && taskTime >= oneWeekAgo && taskTime <= currentTime;
  };

  const lastWeekTasks = tasks.filter((task) => completedOnTime(task));
  const lastMonthTasks = tasks.filter((task) => {
    const taskTime = new Date(task.timeLeft);
    return task.completed && taskTime >= oneMonthAgo && taskTime <= currentTime;
  });

  return (
    <div>
      <h3>Metrics</h3>
      <p>Tasks completed on time last week: {lastWeekTasks.length}</p>
      <p>Tasks completed on time last month: {lastMonthTasks.length}</p>
    </div>
  );
};

export default Metrics;
