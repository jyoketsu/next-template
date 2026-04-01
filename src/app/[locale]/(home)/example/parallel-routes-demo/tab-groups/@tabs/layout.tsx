import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="tab1">Tab1</Link>
        <Link href="tab2">Tab2</Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
