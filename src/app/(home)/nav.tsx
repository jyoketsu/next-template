"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { exampleAsideItems, uiExampleAsideItems } from "../../data/aside-items";
import { navItems } from "@/data/nav-items";
import { isActive, isExactActive } from "@/lib/utils";

export function Nav({
  className,
  showAside,
  onPathClick,
}: {
  className?: string;
  showAside?: boolean;
  onPathClick?: (path: string) => void;
}) {
  const pathname = usePathname(); // 获取当前路径

  const items = pathname.startsWith("/example")
    ? exampleAsideItems
    : uiExampleAsideItems;

  return (
    <nav
      className={`flex flex-col space-y-3 text-lg md:flex-row md:space-y-0 md:items-center md:space-x-6 md:text-sm ${className}`}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={
            isActive(item.href, pathname) ? "text-active font-medium" : ""
          }
          onClick={() => onPathClick && onPathClick(item.href)}
        >
          {item.label}
        </Link>
      ))}
      {showAside &&
      (pathname.startsWith("/example") ||
        pathname.startsWith("/ui-example")) ? (
        <div className="w-full flex flex-col space-y-3 border-t pt-3">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={
                isExactActive(item.href, pathname)
                  ? "text-active font-medium"
                  : ""
              }
              onClick={() => onPathClick && onPathClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
