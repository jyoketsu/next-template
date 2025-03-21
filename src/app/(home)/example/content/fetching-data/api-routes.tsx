"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ApiRoutes() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/api-routes-example", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({ field: "test" }),
    });
    const data = await res.json();
    setLoading(false);
    console.log(data);
    if (data.ok) {
      toast.success("submit success");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <Button disabled={loading} onClick={handleSubmit}>
      {loading && <Loader2 className="animate-spin" />}
      Submit
    </Button>
  );
}
