import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 判断链接是否激活
export const isActive = (href: string, pathname: string) => {
  return pathname === href || pathname.startsWith(`${href}/`);
};

export const isExactActive = (href: string, pathname: string) => {
  return pathname === href;
};
