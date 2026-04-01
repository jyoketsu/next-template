"use client";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export default function ContextReducerDemo() {
  return (
    <TasksProvider>
      <div className="border p-5 rounded-md not-prose space-y-4">
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
