import "next-auth";
import { DefaultSession } from "next-auth";

export type User = {
  id: number;
  email: string;
  name: string;
  avatar: string;
  password: string;
};

declare module "next-auth" {
  interface User {
    username?: string;
    avatar?: string;
  }

  interface Session {
    user: {
      username?: string;
      avatar?: string;
    } & DefaultSession["user"];
  }
}
