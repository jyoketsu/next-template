"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/lib/actions";
import { startTransition, useActionState } from "react";

const initialState = {
  message: "",
};

export function ServerActions2() {
  const [state, formAction, pending] = useActionState(createPost, initialState);

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    content: z.string().min(2, {
      message: "content must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <div className="not-prose">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
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
          {state?.message && <p className="text-red-500">{state.message}</p>}
          <Button type="submit" disabled={pending}>
            {pending && <Loader2 className="animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
