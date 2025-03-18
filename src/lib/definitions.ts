import "next-auth";
import { DefaultSession } from "next-auth";

export type User = {
  username: string;
  password: string;
  avatar: string;
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
