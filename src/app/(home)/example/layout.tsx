import Link from "next/link";
export default function ExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen grid grid-cols-2 gap-4">
      <div className="w-[100px] border-r flex flex-col">
        <Link href="/example">示例</Link>
        <Link href="/example/basic">基础示例</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
