"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useActionState, useEffect, useState } from "react";
import { addPost, editPost, getPost } from "@/lib/actions/demo/mysql-demo";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function DialogFormDemo({
  id,
  isOpen,
  onClose,
}: {
  id?: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  const save = (prevState: string | undefined, data: FormData) => {
    if (id) {
      return editPost(id, data);
    } else {
      return addPost(data);
    }
  };

  const [errorMessage, formAction, isPending] = useActionState(save, undefined);

  const formSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Title must be at least 2 characters.",
      })
      .max(50, {
        message: "Title must be at most 50 characters.",
      }),
    content: z
      .string()
      .min(6, {
        message: "Content must be at least 2 characters.",
      })
      .max(100, {
        message: "Content must be at most 100 characters.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  useEffect(() => {
    if (id && isOpen) {
      initForm(id);
    }
  }, [id, isOpen]);

  async function initForm(id: number) {
    const post: any = await getPost(id);
    if (post) {
      form.reset({
        title: post.title,
        content: post.content,
      });
    } else {
      toast.error("Failed to fetch post");
    }
  }

  useEffect(() => {
    form.reset();
  }, [isOpen]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage || "");
    }
  }, [errorMessage]);

  useEffect(() => {
    if (!isPending && !errorMessage) {
      onClose();
      toast.success(`${id ? "Post updated" : "Post created"} successfully!`);
    }
  }, [isPending, errorMessage]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{id ? "Edit Post" : "Create New Post"}</DialogTitle>
          <DialogDescription>
            {id
              ? "Edit your post here. Click save when you're done."
              : "Create your post here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-8" action={formAction}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Please input title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Please input content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="animate-spin" /> : null}
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
