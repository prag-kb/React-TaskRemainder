// import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2.30pm",
      remainder: true,
    },
    {
      id: 2,
      text: "Cleaner Appointment",
      day: "Feb 6th at 1.30pm",
      remainder: true,
    },
    {
      id: 3,
      text: "Lawyer Appointment",
      day: "Feb 4th at 12.30pm",
      remainder: false,
    },
  ]);
  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle remainder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };
  return (
    <>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleRemainder}
          />
        ) : ( 
          "None to Display"
        )}
      </div>
    </>
  );
};

export default App;
