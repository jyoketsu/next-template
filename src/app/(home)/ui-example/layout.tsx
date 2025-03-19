import { Aside } from "../../../components/common/aside";
import { uiExampleAsideItems } from "../../../data/aside-items";

export default function ExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full md:grid md:grid-cols-[240px_1fr] md:gap-10">
      <Aside items={uiExampleAsideItems} />
      <main className="py-6">
        <div className="prose dark:prose-invert mx-auto w-full min-w-0 max-w-2xl">{children}</div>
      </main>
    </div>
  );
}


