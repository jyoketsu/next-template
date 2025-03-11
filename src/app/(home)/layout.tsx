import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="h-12 border-b flex items-center px-5 space-x-2 sticky top-0 bg-background/80 z-50 backdrop-blur">
        <Link href="/">首页</Link>
        <Link href="/example">示例</Link>
        <Link href="/login">登录</Link>
        <ModeToggle />
      </header>
      {children}
    </div>
  );
}
