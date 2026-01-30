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
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useActionState, useEffect } from "react";
import { authenticate } from "@/lib/actions";
import { useSearchParams } from "next/navigation";

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/need-authorized";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 2 characters.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage || "");
    }
  }, [errorMessage]);

  return (
    <Form {...form}>
      <form className="space-y-8" action={formAction}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Please input username" {...field} />
              </FormControl>
              <FormDescription>jyoketsu</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Please input password"
                  {...field}
                />
              </FormControl>
              <FormDescription>123456</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? <Loader2 className="animate-spin" /> : null}
          Login
        </Button>
      </form>
    </Form>
  );
}
