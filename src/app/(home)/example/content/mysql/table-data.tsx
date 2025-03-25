"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditIcon } from "lucide-react";
import { DeleteButton } from "./delete-button";
import { DialogFormDemo } from "./dialog-form-demo";
import React from "react";

export function TableData({ posts }: { posts: any[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPostId, setSelectedPostId] = React.useState<number>();

  const handleClickEdit = (id: number) => {
    setSelectedPostId(id);
    setIsOpen(true);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post: any) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.content}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleClickEdit(post.id)}
                >
                  <EditIcon />
                </Button>
                <DeleteButton id={post.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DialogFormDemo
        id={selectedPostId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
