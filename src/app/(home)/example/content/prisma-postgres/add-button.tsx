"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogFormDemo } from "./dialog-form-demo";

export function AddButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Add post
      </Button>

      <DialogFormDemo isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
