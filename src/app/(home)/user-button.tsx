import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/auth";

export default async function UserButton() {
  const session = await auth();

  return !session?.user ? (
    <Link href="/login">
      <Button>Login</Button>
    </Link>
  ) : (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={session.user.avatar}
              alt={session.user.username}
            />
            <AvatarFallback>{session.user.username}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user.username}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button>Logout</button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
