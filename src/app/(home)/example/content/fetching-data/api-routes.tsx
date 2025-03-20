"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ApiRoutes() {
  const handleSubmit = async () => {
    const res = await fetch("/api/api-routes-example", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({ field: "test" }),
    });
    const data = await res.json();
    console.log(data);
    toast.success("submit success");
  };

  return (
    <div className="w-full pb-6 border-b">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
        API Routes
      </h3>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
