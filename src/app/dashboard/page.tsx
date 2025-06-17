"use client";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;
    const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, { id: nextId, title: newTask, completed: false }]);
    setNewTask("");
  }

  function toggleTaskCompletion(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">TaskMaster Dashboard</h1>
      <div className="mb-4">
        <input
          className="border rounded px-3 py-2 mr-2 w-3/4"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center mb-2 p-2 border rounded ${
              task.completed ? "bg-green-100 text-green-700 line-through" : ""
            }`}
          >
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className="cursor-pointer flex-1"
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 text-red-600 hover:text-red-900"
              aria-label={`Delete task ${task.title}`}
            >
              &times;
            </button>
          </li>
        ))}
        {tasks.length === 0 && <li>No tasks yet. Add your first task above.</li>}
      </ul>
    </main>
  );
}

