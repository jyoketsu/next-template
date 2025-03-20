import { Aside } from "../../../components/common/aside";
import { exampleAsideItems } from "../../../data/aside-items";

export default function ExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full md:grid md:grid-cols-[240px_1fr] md:gap-10">
      <Aside items={exampleAsideItems} />
      <main className="py-6">
        <div className="mx-auto w-full min-w-0 max-w-2xl">{children}</div>
      </main>
    </div>
  );
}
