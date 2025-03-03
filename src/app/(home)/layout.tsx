import Link from "next/link";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-12 border-b flex items-center px-5 space-x-2">
        <Link href="/">首页</Link>
        <Link href="/example">示例</Link>
        <Link href="/login">登录</Link>
      </div>
      {children}
    </div>
  );
}
