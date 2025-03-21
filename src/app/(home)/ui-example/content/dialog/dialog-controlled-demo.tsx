"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogControlledDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="space-x-3">
        <span>isOpen: {isOpen ? "true" : "false"}</span>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
      </div>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog title</DialogTitle>
          </DialogHeader>
          <div>content</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
