import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Nav } from "./nav";
import { MobileMenu } from "./mobile-menu";
import UserButton from "./user-button";

export function Header() {
  return (
    <header className="border-b px-6 sticky top-0 bg-background/60 z-50 backdrop-blur text-sm">
      <div className="max-w-7xl mx-auto h-13 flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <MobileMenu />
          <Link href="https://vercel.com/" target="_blank">
            <Image
              className="invert dark:invert-0"
              src="/vercel.svg"
              alt="Vercel logo"
              width={25}
              height={25}
              priority
            />
          </Link>
          <Link href="https://nextjs.org/" target="_blank">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={18}
              priority
            />
          </Link>
        </div>

        <Nav className="hidden md:flex" />
        <i className="flex-1" />

        <div className="flex items-center space-x-2">
          <Link
            href="https://github.com/jyoketsu/next-template"
            target="_blank"
          >
            <Button variant="ghost" className="size-8">
              <Github className="h-4 w-4 rotate-0 scale-100 dark:text-white" />
            </Button>
          </Link>
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}
