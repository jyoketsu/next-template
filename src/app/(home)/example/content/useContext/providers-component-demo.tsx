"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";

// 定义上下文类型
type ThemeContextType = string;
type CurrentUserContextType = {
  currentUser: { name: string } | null;
  setCurrentUser: (user: { name: string } | null) => void;
};

// 创建上下文
const ThemeContext = createContext<ThemeContextType | null>(null);
const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

function MyProviders({
  children,
  theme,
  setTheme,
}: {
  children: ReactNode;
  theme: ThemeContextType;
  setTheme: (theme: ThemeContextType) => void;
}) {
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

export function ProvidersComponentDemo() {
  const [theme, setTheme] = useState<ThemeContextType>("light");
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <div className="border p-5 rounded-md not-prose">
        <WelcomePanel />
        <Checkbox
          id="theme"
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        <label
          htmlFor="theme"
          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Use dark mode
        </label>
      </div>
    </MyProviders>
  );
}

function WelcomePanel() {
  const currentUserContext = useContext(CurrentUserContext);
  if (!currentUserContext) {
    throw new Error(
      "WelcomePanel must be used within a CurrentUserContext.Provider"
    );
  }
  const { currentUser } = currentUserContext;
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const currentUserContext = useContext(CurrentUserContext);
  if (!currentUserContext) {
    throw new Error(
      "Greeting must be used within a CurrentUserContext.Provider"
    );
  }
  const { currentUser } = currentUserContext;
  return <p>You logged in as {currentUser?.name}.</p>;
}

function LoginForm() {
  const currentUserContext = useContext(CurrentUserContext);
  const theme = useContext(ThemeContext);
  if (!currentUserContext) {
    throw new Error(
      "LoginForm must be used within a CurrentUserContext.Provider"
    );
  }
  const { setCurrentUser } = currentUserContext;

  const formSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setCurrentUser({ name: values.firstName + " " + values.lastName });
  }

  return (
    <Form {...form}>
      <form className="space-y-8 my-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name:</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name:</FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={`${theme === "dark" && "bg-gray-100 text-black"}`}
        >
          Log in
        </Button>
      </form>
    </Form>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("Panel must be used within a ThemeContext.Provider");
  }
  return (
    <section
      className={`p-3 rounded-md ${
        theme === "dark" && "bg-gray-800 text-white"
      }`}
    >
      <h1>{title}</h1>
      {children}
    </section>
  );
}
