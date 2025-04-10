import { useState, useContext } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext";
import { Task as TaskType } from "./TasksContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }: { task: TaskType }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <Input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className="w-full">{task.text}</span>
        <Button variant="outline" onClick={() => setIsEditing(true)}>Edit</Button>
      </>
    );
  }
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={task.done}
        onCheckedChange={(checked: boolean) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: checked,
            },
          });
        }}
      />
      {taskContent}
      <Button
        variant="outline"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </Button>
    </div>
  );
}
