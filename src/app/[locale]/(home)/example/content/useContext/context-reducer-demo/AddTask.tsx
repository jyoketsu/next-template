import { useState, useContext } from "react";
import { useTasksDispatch } from "./TasksContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <div className="flex items-center space-x-2">
      <Input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </Button>
    </div>
  );
}

let nextId = 3;
