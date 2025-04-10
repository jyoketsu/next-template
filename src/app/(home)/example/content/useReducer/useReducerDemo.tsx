"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReducer } from "react";

type State = {
  name: string;
  age: number;
};

type Action =
  | { type: "incremented_age" }
  | { type: "changed_name"; nextName: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  // @ts-ignore
  throw Error("Unknown action: " + action.type);
}

const initialState = { name: "Taylor", age: 42 };

export function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <div className="space-y-2">
      <Input value={state.name} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>Increment age</Button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </div>
  );
}
