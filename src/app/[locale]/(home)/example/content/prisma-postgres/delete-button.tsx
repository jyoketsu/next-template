"use client";

import { Button } from "@/components/ui/button";
import { deletePost } from "@/lib/actions/demo/prisma-demo";
import { TrashIcon } from "lucide-react";

export function DeleteButton({ id }: { id: number }) {
  return (
    <Button variant="ghost" type="submit" onClick={() => deletePost(id)}>
      <TrashIcon className="text-red-400" />
    </Button>
  );
}
