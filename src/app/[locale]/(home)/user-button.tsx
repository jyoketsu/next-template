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
import { getTranslations } from "next-intl/server";

export default async function UserButton() {
  const session = await auth();
  const t = await getTranslations("UserButton");

  return !session?.user ? (
    <Link href="/login">
      <Button>{t("login")}</Button>
    </Link>
  ) : (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={session.user.avatar}
              alt={session.user.name || ''}
            />
            <AvatarFallback>{session.user.name || ''}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user.name || ''}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button>{t("logout")}</button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
