"use client";

import { Button } from "@/components/ui/button";
import { isExactActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Aside({
  items,
}: Readonly<{ items: { href: string; label: string }[] }>) {
  const pathname = usePathname();

  return (
    <div className="w-full h-[calc(100vh-3.5rem)] border-r hidden md:flex flex-col sticky top-13 pr-3 py-6 overflow-auto">
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            className={`w-full justify-start ${
              isExactActive(item.href, pathname)
                ? "text-active hover:text-active font-medium"
                : ""
            }`}
            variant="ghost"
            size="sm"
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
