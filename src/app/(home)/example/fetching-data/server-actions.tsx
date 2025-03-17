"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { serverActionsExample } from "./actions";
import { toast } from "sonner";

export function ServerActions() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    file: z
      .any()
      .refine(
        (val) => typeof window === "undefined" || val instanceof File,
        "需要上传文件"
      )
      .refine(
        (file) => file?.type?.startsWith("application/"),
        "Only Excel files are allowed"
      )
      .nullable(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value instanceof File ? value : String(value));
    });
    await serverActionsExample(formData);
    toast.success("submit success");
  }

  return (
    <div className="w-full pb-6 border-b">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
        Server Actions
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>File</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={(e) =>
                      field.onChange(e.target.files?.[0] || null)
                    }
                    // onBlur={field.onBlur}
                    // name={field.name}
                    // ref={field.ref}
                  />
                </FormControl>
                <FormDescription>This is a file upload field.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
